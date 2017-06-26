require 'test_helper'

class SecretControllerTest < ActionDispatch::IntegrationTest
  test "should get play" do
    get secret_play_url
    assert_response :success
  end

end
