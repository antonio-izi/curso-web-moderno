// Uma factory retorna um novo objeto ou nova instancia

module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}