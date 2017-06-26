# == Schema Information
#
# Table name: catogeries
#
#  id         :integer          not null, primary key
#  name       :string
#  number     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Catogery < ApplicationRecord
has_and_belongs_to_many :products
has_and_belongs_to_many :sales
end
