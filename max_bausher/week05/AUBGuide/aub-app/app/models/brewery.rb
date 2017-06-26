# == Schema Information
#
# Table name: breweries
#
#  id         :integer          not null, primary key
#  name       :string
#  location   :string
#  image      :string
#  website    :string
#  philosophy :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Brewery < ApplicationRecord
    has_many :beers, dependent: :destroy
end
