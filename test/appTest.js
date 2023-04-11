const ProductsDAOMem = require("../src/model/DAOs/products/productsDAOMem");
const assert = require("assert").strict;

describe("test ProductsDAOMem", function () {
  it("deberia traer la lista de productos vacia", function () {
    const productsDAOMem = new ProductsDAOMem();
    assert.strictEqual(productsDAOMem.getAll().length, 0);
  });

  it("deberia agregar un producto", function () {
    const productsDAOMem = new ProductsDAOMem();
    productsDAOMem.save({
      title: "Samsung S22 Ultra",
      price: 369999,
      thumbnail:
        "https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/galaxy_s22_ultra_3.jpg",
    });
    assert.deepStrictEqual(productsDAOMem.getAll(), [
      {
        title: "Samsung S22 Ultra",
        price: 369999,
        thumbnail:
          "https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/galaxy_s22_ultra_3.jpg",
        id: 1,
      },
    ]);
    productsDAOMem.save({
      title: "Samsung S22 Ultra",
      price: 369999,
      thumbnail:
        "https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/galaxy_s22_ultra_3.jpg",
    });
    assert.strictEqual(productsDAOMem.getAll().length, 2);
    assert.deepStrictEqual(productsDAOMem.getAll(), [
      {
        title: "Samsung S22 Ultra",
        price: 369999,
        thumbnail:
          "https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/galaxy_s22_ultra_3.jpg",
        id: 1,
      },
      {
        title: "Samsung S22 Ultra",
        price: 369999,
        thumbnail:
          "https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/galaxy_s22_ultra_3.jpg",
        id: 2,
      },
    ]);
  });

  it("deberia elimnar un producto según id", function () {
    const productsDAOMem = new ProductsDAOMem();

    productsDAOMem.save({
      title: "Samsung S22 Ultra",
      price: 369999,
      thumbnail:
        "https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/galaxy_s22_ultra_3.jpg",
    });

    productsDAOMem.save({
      title: "Samsung S22 Ultra",
      price: 369999,
      thumbnail:
        "https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/galaxy_s22_ultra_3.jpg",
    });
    assert.deepStrictEqual(productsDAOMem.deleteById(1), [
      {
        title: "Samsung S22 Ultra",
        price: 369999,
        thumbnail:
          "https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/galaxy_s22_ultra_3.jpg",
        id: 1,
      },
    ]);
  });

  it("deberia eliminar todos los producto", function () {
    const productsDAOMem = new ProductsDAOMem();

    productsDAOMem.save({
      title: "Samsung S22 Ultra",
      price: 369999,
      thumbnail:
        "https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/galaxy_s22_ultra_3.jpg",
    });

    productsDAOMem.save({
      title: "Samsung S22 Ultra",
      price: 369999,
      thumbnail:
        "https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/galaxy_s22_ultra_3.jpg",
    });

    assert.strictEqual(productsDAOMem.deleteAll(), true);
  });

  it("deberia modificar un producto según 1", function () {
    const productsDAOMem = new ProductsDAOMem();

    productsDAOMem.save({
      title: "Samsung S22 Ultra",
      price: 369999,
      thumbnail:
        "https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/galaxy_s22_ultra_3.jpg",
    });

    productsDAOMem.save({
      title: "Samsung S22 Ultra",
      price: 369999,
      thumbnail:
        "https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/galaxy_s22_ultra_3.jpg",
    });

    assert.deepStrictEqual(
      productsDAOMem.update({
        title: "AHORA TENGO OTRO TITLE",
        price: 395000,
        thumbnail:
          "https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/galaxy_s22_ultra_3.jpg",
        id: 1,
      }),
      {
        id: 1,
        price: 395000,
        thumbnail:
          "https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/galaxy_s22_ultra_3.jpg",
        title: "AHORA TENGO OTRO TITLE",
      }
    );
  });
});
