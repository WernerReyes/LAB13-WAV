import axios from "axios";
import { ProductEntity } from "../entities";

export class ProductService {
  private readonly API = "http://localhost:8000/api/products";

  public async getAll() {
    return axios.get(this.API);
  }

  public async getById(id: number) {
    return axios.get(`${this.API}/${id}`);
  }

  public async create(product: ProductEntity) {
    return axios.post(this.API, product);
  }

  public async update(product: ProductEntity) {
    return axios.post(this.API, product);
  }

  public async delete(id: number) {
    return axios.delete(`${this.API}/${id}`);
  }
}
