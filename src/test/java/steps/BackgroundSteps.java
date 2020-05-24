package steps;

import org.junit.runner.RunWith;


import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.junit.Cucumber;
@RunWith(Cucumber.class)
public class BackgroundSteps {
	
	@Given("^user open the browser$")
    public void user_open_the_browser() throws Throwable {
		
		 System.out.println("Browser opened");
		   	
    }

    @When("^browser opens$")
    public void browser_opens() throws Throwable {
    	
	   	
    }

    @Then("^maximize the browser$")
    public void maximize_the_browser() throws Throwable {
    	System.out.println("Browser maximized");
    }

    @And("^Delete all cookies$")
    public void delete_all_cookies() throws Throwable {
    	System.out.println("All cookies deleted");
    }
}