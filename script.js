function showTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    const tabs = document.querySelectorAll('.tabs button');
    
    contents.forEach(content => content.style.display = 'none');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    document.getElementById(tabId).style.display = 'block';
    document.querySelector(`.tabs button[onclick="showTab('${tabId}')"]`).classList.add('active');
}

