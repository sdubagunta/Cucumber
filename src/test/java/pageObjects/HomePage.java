package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.udemy.learning.Cucumber.Base;

public class HomePage {
	
	public WebDriver driver;
	public HomePage (WebDriver driver) {
		this.driver = driver;
	}

	
	By Search = By.cssSelector("#root > div > header > div > div.search > form > input");
	By searchButton = By.className("search-button");
	
	public WebElement getSearch() {
		return driver.findElement(Search);
	}
	
	public WebElement getSearchButton() {
		return driver.findElement(searchButton);
	}
}
