class ProductsController < ApplicationController
  def new
    @product = Product.new
    @catogery = Catogery.all
    @sale = Sale.all
  end

  def create
    product = Product.create({
      name: params["name"],
      number: params["number"],
      quantity: params["quantity"],
      price: params["price"]
      })
      redirect_to "/products/#{ product.id}"
  end

  def edit
    @product = Product.find params["id"]
  end

  def update
    @product = Product.find params["id"]
    product.update({
      name: params["name"],
      number: params["number"],
      quantity: params["quantity"],
      price: params["price"]
      })
      redirect_to "/products/#{ product.id}"
  end

  def show
    @product = Product.find params["id"]
  end

  def index
    @products = Product.all
  end

  def destroy
   Product.find params["id"].destroy
   redirect_to "/products"
  end
end
