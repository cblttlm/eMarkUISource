import {Product} from './product.model';

export class SimpleDataSource {
  private data: Product[];
  constructor() {
    this.data = new Array<Product>(
      new Product(1, "Kayak", "Watersports", 297,30,"mulkproduct"),
      new Product(2, "Lifejact", "Watersports", 48.95,50,"telephone")
    )
  }
  getData() : Product[] {
    return this.data;
  }
}
