class SalesController < ApplicationController
  def new
    @sale = Sale.new
    @catogeries = Catogery.all
    @product = Product.all
  end

  def create
    sale = Sale.create sale_params
    redirect_to "/sales/#{ sale.id}"
  end

  def edit
    @sale = Sale.find params["id"]
    @catogeries = Catogery.all
    @product = Product.all
  end

  def update
    Sale.update sale_params
    redirect_to "/sales/#{ params["id"]}"
  end

  def show
    @sale = Sale.find params["id"]
  end

  def index
    @sales = Sale.all
  end

  def destroy
    Sale.find( params["id"]).destory
    redirect_to "/sales"
  end
  private
  def sale_params
    params.require(:sale).permit(:name, :number)
  end
end
