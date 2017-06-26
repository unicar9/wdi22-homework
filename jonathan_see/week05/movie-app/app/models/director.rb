# == Schema Information
#
# Table name: directors
#
#  id          :integer          not null, primary key
#  name        :text
#  dob         :date
#  nationality :text
#  period      :text
#  image       :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Director < ApplicationRecord
end
