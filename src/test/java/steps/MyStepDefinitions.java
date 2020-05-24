package steps;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.udemy.learning.Cucumber.Base;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.junit.Cucumber;
import junit.framework.Assert;
import pageObjects.HomePage;
import pageObjects.SearchResultsPage;

@RunWith(Cucumber.class)
public class MyStepDefinitions {
	public WebDriver driver;
	

	@Given("^User is on greencart landing page$")
	public void user_is_on_greencart_landing_page() throws Throwable {
		driver = Base.getDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();

	}

	/*
	 * @When("^user search for (.+)$") public void user_search_for_something(String
	 * strArg1) throws Throwable { hp.getSearch().sendKeys(strArg1);
	 * Thread.sleep(1000); hp.getSearchButton().click();
	 * 
	 * }
	 */

	@When("^user search for (.+)$")
	public void user_search_for(String name) throws Throwable {
		HomePage hp = new HomePage(driver);
		hp.getSearch().sendKeys(name);
		Thread.sleep(1000);
		hp.getSearchButton().click();
	}
	
	@SuppressWarnings("deprecation")
	@Then("^results for \"([^\"]*)\" are displayed$")
	public void results_for_something_are_displayed(String strArg1) throws Throwable {
		SearchResultsPage sp = new SearchResultsPage(driver);
		String resultsTxt = sp.getSearchText().getText();
		System.out.println(resultsTxt);
		Assert.assertTrue(resultsTxt.contains(strArg1));
	}

	@When("Added items to cart")
	public void added_items_to_cart() {
		driver.findElement(By.cssSelector(".increment")).click();
		driver.findElement(By.cssSelector(".product-action > button:nth-child(1)")).click();
	}

	@When("User proceeded to checkout page for purchase")
	public void user_proceeded_to_checkout_page_for_purchase() {
		driver.findElement(By.cssSelector(".cart-icon > img:nth-child(1)")).click();
		driver.findElement(By.cssSelector("div.action-block:nth-child(2) > button:nth-child(1)")).click();

	}

	/*
	 * @SuppressWarnings("deprecation")
	 * 
	 * @Then("verify selected {string} items are displayed in checkout page") public
	 * void verify_selected_items_are_displayed_in_checkout_page(String string) {
	 * Assert.assertTrue(driver.findElement(By.cssSelector(".product-name")).getText
	 * ().contains(string)); }
	 */

	@SuppressWarnings("deprecation")
	@Then("^verify selected (.+) items are displayed in checkout page$")
	public void verify_selected_items_are_displayed_in_checkout_page(String name) throws Throwable {

		Assert.assertTrue(driver.findElement(By.cssSelector(".product-name")).getText().contains(name));
	}

	

}