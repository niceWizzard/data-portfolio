---
name: "Forecasting Philippine Inflation Rate"
description: "This study investigates the application of univariate time series analysis forecasting for the Philippine inflation rate. The ARIMA model was able to forecast Philippine inflation rate with an error of 26.33%"
tags: ["Python", "Time Series Analysis & Forecasting", "BSP"]
analysisFile: "https://github.com/niceWizzard/mathmod_proj"
sources: ["https://www.bsp.gov.ph/SitePages/Statistics/Prices.aspx?TabId=1"]
image: "inflationmain.png"
---

# Forecasting Philippine Inflation Rate: Univariate Time Series Analysis

## Data Source & Methodology

The dataset was sourced from the **[Bangko Sentral ng Pilipinas (BSP)](https://www.bsp.gov.ph/SitePages/Statistics/Prices.aspx?TabId=1)**, featuring monthly 2018-based inflation rate records spanning from 2005 to 2024.

The study investigates the application of univariate time series analysis to forecast the Philippine inflation rate based solely on past values, without considering external economic factors.

### Data Processing

Data preprocessing and analysis were performed using Python and MS Excel.
* Researchers executed an 80/20 train-test split, dedicating 192 data points to the training set and 48 to the testing set.
* The Augmented Dickey-Fuller (ADF) Test was used to validate stationarity, confirming the data was stationary and required no transformations.
* The study compared two mathematical models: **Holt-Winters Exponential Smoothing (HWES)** and the **Autoregressive Integrated Moving Average (ARIMA)**.

![Figure 1. Historical Inflation Rate (2005-2024)](/images/projects/inflationmain.png)

---

## Key Findings

### 1. Superiority of the ARIMA Model

The **ARIMA(3,0,1)** model emerged as the most accurate framework for forecasting the inflation rate 
* It yielded a Mean Absolute Percentage Error (MAPE) of 26.33% and a Mean Squared Error (MSE) of 3.66 on the test set 
* Diagnostic checks confirmed that all parameter coefficients were significantly different from zero, indicating a strong and reliable fit.

![Figure 2. ARIMA Forecast](/images/projects/inflation1.png)

### 2. Limitations of Holt-Winters

While the HWES model achieved a reasonable MAPE of 30.10%, it ultimately failed the Ljung-Box diagnostic test 
* The test revealed that the model's residuals were highly correlated rather than being independent white noise 
* This failure signifies that the HWES model could not capture all underlying trends and information present in the inflation data.

![Figure 3. Holt-Winters Forecast](/images/projects/inflation2.png)

### 3. Projected Inflation for 2025-2026

Using the successful ARIMA(3,0,1) model `(from Figure 2)`, the forecast predicts a steady upward trend in the Philippine inflation rate over the next two years 
* The projected inflation rate begins at **3.24%** in January 2025 
* It is expected to gradually climb, reaching **4.0%** by December 2026.


## Footnotes

This study was a final project for one of our undergraduate courses in Bulacan State University. The following lists the resources for the study:
* [Research Paper](https://drive.google.com/file/d/1_IMoh-hEoItbvZRft_7fDTi-g2Bwm2l4/view?ths=true) - the final research paper for the study.
* [Github Repo](https://github.com/niceWizzard/mathmod_proj) - the Github repository containing the Python code used for the analysis.