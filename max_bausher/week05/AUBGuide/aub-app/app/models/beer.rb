# == Schema Information
#
# Table name: beers
#
#  id           :integer          not null, primary key
#  style        :string
#  tastingnotes :string
#  image        :string
#  abv          :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Beer < ApplicationRecord
    belongs_to :brewery, optional: true
end
