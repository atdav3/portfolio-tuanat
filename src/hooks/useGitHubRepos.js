'use client'
import { useState, useEffect } from 'react'
import { info } from '../utils/info'

export const useGitHubRepos = (limit = 12) => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRepos = async () => {
      // Check cache first
      const cached = localStorage.getItem('github-repos')
      const cacheTime = localStorage.getItem('github-repos-time')
      const now = Date.now()
      
      // Use cache if less than 5 minutes old
      if (cached && cacheTime && (now - parseInt(cacheTime)) < 5 * 60 * 1000) {
        const cachedRepos = JSON.parse(cached)
        // Featured repositories - ưu tiên hiển thị lên đầu
        const featuredRepos = ['Weather-App']
        const featured = cachedRepos.filter(repo => featuredRepos.includes(repo.name))
        const regular = cachedRepos.filter(repo => !featuredRepos.includes(repo.name))
        const sortedCached = [
          ...featured.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)),
          ...regular.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        ]
        setRepos(sortedCached.slice(0, limit))
        setLoading(false)
        return
      }

      try {
        // Fetch from GitHub API for live data
        const githubResponse = await fetch(`https://api.github.com/users/${info.githubUsername}/repos?sort=updated&per_page=${Math.max(limit, 12)}`)
        if (githubResponse.ok) {
          const githubData = await githubResponse.json()
          
          // Featured repositories - ưu tiên hiển thị lên đầu
          const featuredRepos = ['Weather-App']
          
          // Tách repos thành featured và regular
          const featured = githubData.filter(repo => featuredRepos.includes(repo.name))
          const regular = githubData.filter(repo => !featuredRepos.includes(repo.name))
          
          // Sắp xếp: featured trước, sau đó là regular theo updated_at
          const sortedRepos = [
            ...featured.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)),
            ...regular.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          ]
          
          const repoData = sortedRepos.slice(0, Math.max(limit, 12)) // Cache tối thiểu 12 repos
          
          // Cache the data
          localStorage.setItem('github-repos', JSON.stringify(repoData))
          localStorage.setItem('github-repos-time', now.toString())
          
          setRepos(repoData.slice(0, limit))
        } else {
          console.error('GitHub API failed')
          setRepos([])
        }
      } catch (error) {
        console.error('Error fetching repos:', error)
        setRepos([])
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [limit])

  return { repos, loading }
}
