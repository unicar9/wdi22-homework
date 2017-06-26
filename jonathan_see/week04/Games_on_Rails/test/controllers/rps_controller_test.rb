require 'test_helper'

class RpsControllerTest < ActionDispatch::IntegrationTest
  test "should get play" do
    get rps_play_url
    assert_response :success
  end

end
