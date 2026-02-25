function playAudio(file) {
    const audio = new Audio(file);
    audio.play();
}
data.words.forEach(item => {
    // card.innerHTML = <img + word + audio>
});
data.poems.forEach(item => {
    const col = document.createElement('div');
    col.className = 'col-md-6 mb-3';
    col.innerHTML = `
        <div class="card p-3 shadow-sm">
            <h4 class="card-title">${item.title}</h4>
            <p style="white-space: pre-line;">${item.poem_text}</p>
            <button class="btn btn-primary" onclick="playAudio('${item.audio}')">🔊 শুনুন</button>
        </div>`;
    container.appendChild(col);
});