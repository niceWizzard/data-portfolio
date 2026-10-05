---
name: "Birth Statistics Analysis for Year 2024"
description: "This analysis explores the 2024 Philippine Birth Statistics provided by the Philippine Statistics Authority (PSA). It highlights key demographic trends, gender distribution, and provides a comprehensive geographic breakdown of birth counts across regions, provinces, and highly urbanized cities."
tags: ["Power BI", "Excel", "PowerQuery", "PSA"]
analysisFile: "https://drive.google.com/file/d/1P5Wi4alxhqEflFhOsEqvHFccha5VQ1WO/view?usp=sharing"
sources: ["https://openstat.psa.gov.ph/PXWeb/pxweb/en/DB/DB__1A__VS__BI/0031A1ABIC0.px/?rxid=7b9a5b53-a963-49ed-a891-725fb49b9971"]
image: "birthmain.png"
---

# Philippine Birth Statistics Analysis (2024)

## Data Source & Methodology

The dataset was sourced from the **2024 Birth Statistics from the Population and Vital Statistics section**, published by the **Philippine Statistics Authority (PSA)** via [OpenSTAT](https://openstat.psa.gov.ph/PXWeb/pxweb/en/DB/DB__1A__VS__BI/0031A1ABIC0.px/?rxid=7b9a5b53-a963-49ed-a891-725fb49b9971).

### Data Processing

Data cleaning, transformation, and reconciliation were handled in Power BI using **Power Query**:
- Standardized province and Highly Urbanized City (HUC) identifiers across all records.
- Cleaned geographical names (e.g., correcting capitalization and trimming whitespace).
- Recreated the geographic hierarchy (Region > Province > City/Municipality).

---

## Key Findings

### Dashboard

A Power BI dashboard was developed to create a streamlined, interactive visualization of the birth statistics dataset. It features a `Date Slicer` for filtering data by month, alongside standard visualizations such as line charts, column charts, and pie charts. It also includes a geographic heatmap displaying the `birth_count` across various cities.

![Figure 1: Dashboard](/images/projects/birthmain.png)

### Total Statistics

According to the PSA, a total of **1.36 million** births were registered in the Philippines in 2024 alone. The gender distribution indicates that male births accounted for over 50% of the total, while female births made up approximately 48%.

![Figure 2: Sex Distribution](/images/projects/birth4.png)

### Geographical Rankings

Figure 3 illustrates the ranking of registered births by region. **Region IV-A (CALABARZON)** recorded the highest birth count by a significant margin, with **205,000** births registered in 2024. It is followed by Region III, the National Capital Region (NCR), Region V, and Region VII.

![Figure 3: Top Region by Birth Count](/images/projects/birth3.png)

When analyzing the data by province (excluding Metro Manila), **Cebu** recorded the highest birth count across all provinces with **72,000** births. It is followed by Cavite, Bulacan, Rizal, and Laguna.

![Figure 4: Top Province by Birth Count](/images/projects/birth2.png)

![Figure 5: Top City by Birth Count](/images/projects/birth1.png)

At the city level, **Quezon City** leads with **32,600** births, followed by the City of Davao, the City of Manila, Caloocan, Taguig, and Cebu City. Notably, 5 of the Top 10 cities are located within the NCR, which aligns with the sheer population density of the region.

## Footnotes

This analysis was performed using Microsoft Excel and Power BI. The interactive Power BI (`.pbix`) file can be downloaded [here](https://drive.google.com/file/d/1P5Wi4alxhqEflFhOsEqvHFccha5VQ1WO/view?usp=sharing).