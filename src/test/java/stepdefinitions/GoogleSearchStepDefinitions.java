package stepdefinitions;

import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import pages.GooglePages;
import utilities.ConfigReader;
import utilities.Driver;




public class GoogleSearchStepDefinitions {
    GooglePages googlePages =new GooglePages();
    @Given("user is on google page")
    public void user_is_on_google_page() {
        Driver.getDriver().get(ConfigReader.getProperty("urlgoogle"));
    }
    @Given("user search for iphone")
    public void user_search_for_iphone() {
        googlePages.searchBox.sendKeys("iphone"+ Keys.ENTER);
    }
    @Then("verify the result has iphone")
    public void verify_the_result_has_iphone() {
        String pageTitle = Driver.getDriver().getTitle().toLowerCase();
        Assert.assertTrue(pageTitle.contains("iphone"));

    }
    @Given("user searchs for tea pot")
    public void user_searchs_for_tea_pot() {
        googlePages.searchBox.sendKeys("tea pot"+Keys.ENTER);
    }
    @Then("verify the result has tea pot")
    public void verify_the_result_has_tea_pot() {
        String pageTitle= Driver.getDriver().getTitle().toLowerCase();
        Assert.assertTrue(pageTitle.contains("tea pot"));
    }
    @Given("user search for flower")
    public void user_search_for_flower() {
        googlePages.searchBox.sendKeys("flower"+Keys.ENTER);
    }
    @Then("verify the result has flower")
    public void verify_the_result_has_flower() {
        String getTitle= Driver.getDriver().getTitle().toLowerCase();
        Assert.assertTrue(getTitle.contains("manolya"));
    }




}
