
require "sinatra"
require "sinatra/reloader"
require "pry"
require "sqlite3"
require "active_record"

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.db'
)

ActiveRecord::Base.logger = Logger.new( STDERR )

after do
    ActiveRecord::Base.connection.close
end

class Hike < ActiveRecord::Base
end

get "/hikes/:id/delete" do
    Hike.find(params["id"]).destroy
    redirect "/hikes"
end

post "/hikes/:id/edit" do
    Hike.find(params["id"]).update(
    name: params["name"],
    image: params["image"],
    distance: params["distance"],
    near: params["near"],
    difficulty: params["difficulty"])

    redirect "/hikes/#{params["id"]}"
end

get "/hikes/:id/edit" do
    id = params["id"]
    @hike = Hike.find_by :id => id

    erb :edit
end

get "/hikes/:id" do
    id = params["id"]
    @hike = Hike.find_by :id => id

    erb :show
end

get "/hikes" do
    @hikes = Hike.all
    erb :index
end

post "/hikes" do
    Hike.create(
    name: params["name"],
    image: params["image"],
    distance: params["distance"],
    near: params["near"],
    difficulty: params["difficulty"])

    redirect "/hikes"
end

get "/" do
    erb :new
end
