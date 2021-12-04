function bodyloaded() {
    const date = new Date()
    const year = date.getFullYear()

    window.document.getElementById('copyright').innerHTML = `&copy; RaceCarHorizon ${year}, Todos os direitos reservados.`
}