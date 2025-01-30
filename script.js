async function fetchNewsItems() {
    try {
      const response1 = await fetch("./1.json")
      const data1 = await response1.json()
      const response2 = await fetch("./2.json")
      const data2 = await response2.json()
      return [data1.template1, data2.template1]
    } catch (error) {
      console.error("Error fetching news items:", error)
      return []
    }
  }
  
  function createNewsItem(item) {
    const newsItem = document.createElement("div")
    newsItem.className = "news-item"
    newsItem.style.backgroundColor = item.Color || "rgba(255, 255, 255, 0.1)"
  
    // Calculate text color based on background color
    const bgColor = item.Color || "#FFFFFF"
    const textColor = getContrastYIQ(bgColor)
  
    newsItem.innerHTML = `
      <h2 >${item.Title}</h2>
      <div class="content">
        <img src="${item.Image}" alt="${item.Title}">
        <p ">${item.Desc}</p>
      </div>
    `
    return newsItem
  }
  
  // Function to determine contrasting text color
  function getContrastYIQ(hexcolor) {
    hexcolor = hexcolor.replace("#", "")
    const r = Number.parseInt(hexcolor.substr(0, 2), 16)
    const g = Number.parseInt(hexcolor.substr(2, 2), 16)
    const b = Number.parseInt(hexcolor.substr(4, 2), 16)
    const yiq = (r * 299 + g * 587 + b * 114) / 1000
    return yiq >= 128 ? "black" : "white"
  }
  
  async function displayNewsItems() {
    const newsContainer = document.getElementById("news-container")
    const newsItems = await fetchNewsItems()
    newsItems.forEach((item) => {
      const newsItemElement = createNewsItem(item)
      newsContainer.appendChild(newsItemElement)
    })
  }
  
  displayNewsItems()
  
  