---
name: "Analysis of Annual Family Income 2023"
description: "This analysis examines Philippine household earnings using 2023 FIES data to evaluate regional income disparities, revenue sources, and top-decile wealth concentration across provinces and highly urbanized cities. It reveals that population size does not drive higher average income, with top earning brackets remaining heavily centralized in Metro Manila alongside select regional economic hubs."
tags: ["Excel", "PowerQuery", "PSA"]
analysisFile: "https://1drv.ms/x/c/b7498abeee83b797/IQB4l_yuH4tLQ4gTd9DXSGyzAVhFMvSfQ4fd2xnHKsAklZA?e=hSKUY7"
sources: ["https://openstat.psa.gov.ph/PXWeb/pxweb/en/DB/DB__1E__IE/0021E3AIPI0.px/?rxid=71307871-4755-42e7-bb26-266d4910c506", "https://openstat.psa.gov.ph/PXWeb/pxweb/en/DB/DB__1E__IE/0031E3ANST0.px/?rxid=71307871-4755-42e7-bb26-266d4910c506"]
image: "incomemain.png"
---

# Regional Family Income and Inequality Analysis (FIES 2023)

## Data Source & Methodology

The dataset was sourced from the **2023 Family Income and Expenditure Survey (FIES)** published by the **Philippine Statistics Authority (PSA)** via [OpenSTAT](https://openstat.psa.gov.ph/PXWeb/pxweb/en/DB/DB__1E__IE/?tablelist=true).

The analysis draws on two distinct tables:
* **Average Annual Family Income** across provinces and Highly Urbanized Cities (HUCs).
* **Percentage Distribution of Income Sources**, categorized into *Salaries and Wages, Entrepreneurial Activities, Cash Receipts from Abroad/Domestic, and Other Sources*.

### Data Processing

Data cleaning, transformation, and reconciliation were handled in Excel using **Power Query**:
* Standardized province and HUC identifiers across both datasets.
* Executed a composite merge using `Location (Province/HUC)` and `Per Capita Income Decile` as join keys.
* Consolidated the disparate tables into a single relational dataset mapping aggregate income levels directly against income source distributions.

---

## Key Findings

### 1. Population Scale vs. Average Income

Comparing total family count against average annual family income reveals **virtually no correlation** (Figure 1). Denser, high-population provinces and cities do not inherently generate higher average household incomes. Urban scale alone does not drive economic prosperity.

![Figure 1: Family Count vs. Average Annual Family Income](/images/projects/income1.png)

### 2. Top-Performing Locations & Income Composition

As illustrated in Figure 2, the **City of San Juan** leads the nation in average annual family income, closely followed by the **City of Makati**. 

* **NCR Dominance:** The top tier is heavily concentrated within the National Capital Region (NCR), with the **Province of Rizal** standing out as the only non-HUC province breaking into the top 10.
* **Income Composition:** Across top-performing localities, **salaries and wages** comprise the overwhelming majority of household revenue, followed by miscellaneous income and entrepreneurial earnings. This reflects high formal-sector employment rates in dominant commercial hubs.

![Figure 2: Average Annual Family Income and Source Breakdown per Province/HUC](/images/projects/income2.png)

### 3. Concentration of Wealth: The Upper 10% (Top Decile)

Evaluating the top income decile (upper 10%) highlights severe regional income divergence:

* **Makati City** ranks first nationwide, with top-decile families averaging **₱2.80M** annually, followed by **San Juan City** at **₱2.15M**.
* **Beyond Metro Manila:** While NCR comprises the upper decile, high-wealth locations appear outside the capital cluster. **Rizal**, **Davao City**, and notably **Sultan Kudarat** appear alongside the highest brackets. 

![Figure 3: Top 10% Decile Average Annual Family Income](/images/projects/income3.png)

---

## Data Workbook

The consolidated dataset and pivot models are accessible via [OneDrive](https://1drv.ms/x/c/b7498abeee83b797/IQB4l_yuH4tLQ4gTd9DXSGyzAVhFMvSfQ4fd2xnHKsAklZA?e=hSKUY7). The workbook contains three dedicated analysis sheets:
* `family_size_vs_income`: Population scale vs. aggregate income modeling.
* `top_city_family_income`: Regional rankings cross-tabulated with revenue source distributions.
* `top_10th_decile`: Stratified breakdown of the top 10% income bracket.