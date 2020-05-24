package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class SearchResultsPage {
	public  WebDriver driver;
	public SearchResultsPage (WebDriver driver) {
		this.driver = driver;
	}
	
	static By SearchText = By.cssSelector("h4.product-name");
	
	public  WebElement getSearchText() {
		return driver.findElement(SearchText);
	}
}
