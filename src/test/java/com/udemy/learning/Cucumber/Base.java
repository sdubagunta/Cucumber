package com.udemy.learning.Cucumber;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class Base {
	public static WebDriver driver;

	public static WebDriver getDriver() throws IOException {
		// System.setProperty("webdriver.chrome.driver",
		// "C:\\SWATHI\\SELENIUM\\chromedriver_win32\\chromedriver.exe");
		// ChromeDriver driver = new ChromeDriver();
		// driver = new ChromeDriver();
		Properties prop = new Properties();
		FileInputStream fis = new FileInputStream("C:\\Users\\swath\\eclipse-workspace\\Cucumber\\src\\test\\java\\com\\udemy\\learning\\Cucumber\\global.properties"); 
		prop.load(fis);
		
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		
		driver.get(prop.getProperty("url"));
		return driver;

	}
}
