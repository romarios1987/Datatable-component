import RequestService from './RequestService.js';

class DataTableService {
  async getDataAll(url) {
    this.url = url;
    const items = await RequestService.getResource(url);
    return items;
  }
}
export default new DataTableService();
