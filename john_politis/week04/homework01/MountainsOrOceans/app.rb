require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3' ,
  :database => 'database.db'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

after do
  ActiveRecord::Base.connection.close  
end

class Mountain < ActiveRecord::Base 
end

#main page 
get "/" do    
    @mountains = Mountain.all
    erb :index
end


#show the new form 
get '/mountains/new' do
  erb :new
end

#creates the new entry then redirects to the home page
post '/mountains/new' do 
  @params.delete('captures')    
  Mountain.new(@params).save    
  redirect "/"
end

#show the details page with the mountain
get "/mountains/:id" do
  @mountain = Mountain.find_by(id: params["id"])
  erb :detail
end

#information comes from the edit form on submission
get "/mountains/:id/edit" do  
  @mountain = Mountain.find_by(id: params["id"])
  erb :edit
end

#sent from the edit form
post "/mountains/:id" do
  
  mountain = Mountain.find_by(id: params["id"])
  mountain.update description: params["description"] , 
                  image: params["image"] ,
                  location: params["location"]  
            
  redirect "/"
      
end

#delete the entry
get '/mountains/:id/delete' do
  
  mountain = Mountain.find_by(id: params["id"])
  mountain.destroy
      
  redirect "/"
end

