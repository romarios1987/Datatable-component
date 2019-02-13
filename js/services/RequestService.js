class RequestService {
  // async function
  async getResource(url) {
    this.url = url;
    const data = await fetch(`${this.url}.json`)
      .then(res => res.json())
      .catch((err) => {
        console.log('Error: ', err);
      });
    return data;
  }
}
export default new RequestService();
