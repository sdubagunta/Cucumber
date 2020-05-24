package steps;

import org.openqa.selenium.WebDriver;

import com.udemy.learning.Cucumber.Base;

import io.cucumber.java.After;

public class Hooks extends Base {
	

	@After("@SeleniumTest")
	public  void AfterSeleniumTest() {

		driver.close();
	}
}
