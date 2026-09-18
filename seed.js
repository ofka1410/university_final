require('dotenv').config();
const { db } = require('./src/config/firebase');

async function seedFullDatabase() {
  try {
    console.log('מתחיל אתחול מלא של מסד הנתונים...');

    // 1. אוסף מסעדות ומחלקות
    await db.collection('RESTAURANT').doc('rest_1').set({
      Rest_ID: "rest_1",
      Name: "היבה",
      Location: "דרך מנחם בגין 144, תל אביב",
      Departments: [
        { Dept_ID: "dept_1", Dept_Name: "פלור" },
        { Dept_ID: "dept_2", Dept_Name: "מטבח" }
      ]
    });

    // 2. אוסף חוזי העסקה
    await db.collection('WAGES_CONTRACT').doc('contract_1').set({
      Contract_ID: "contract_1",
      Contract_Name: "חוזה מלצר בסיס",
      Contract_Type: "שעתי",
      Base_Rate: 40.0,
      Overtime_125_Multiplier: 1.25,
      Overtime_150_Multiplier: 1.5,
      Includes_Tip_Model: true,
      Bonuses: [
        {
          Bonus_Name: "בונוס מצטיין שירות",
          Bonus_Amount: 500.0,
          Depends_On_Target: true,
          Target_Value: 10000.0
        }
      ]
    });

    // 3. אוסף קטגוריות
    await db.collection('CATEGORY').doc('cat_1').set({
      Cat_ID: "cat_1",
      Cat_Name: "יין ואלכוהול",
      Description: "יינות לבנים, אדומים וקוקטיילים",
      Is_Active: true,
      Display_Order: 1,
      Restaurant_Refs: ["rest_1"]
    });

    // 4. אוסף מוצרים
    await db.collection('PRODUCT').doc('prod_1').set({
      Prod_ID: "prod_1",
      Name: "שאבלי פרמייר קרו",
      Price: 280.0,
      Cat_Ref: "cat_1",
      Is_Active: true,
      Restaurant_Refs: ["rest_1"]
    });

    // 5. אוסף עובדים (ציר המידע המרכזי)
    await db.collection('EMPLOYEE').doc('emp_1').set({
      Emp_ID: "emp_1",
      Tabit_Code: "1001",
      First_Name: "אופק",
      Last_Name: "מאירי",
      Role: "מלצר",
      Hire_Date: new Date(),
      Restaurant_Info: {
        Rest_ID: "rest_1",
        Dept_ID: "dept_1"
      },
      Contract_Ref: "contract_1",
      Status: "Active"
    });

    // 6. אוסף הערות שכר
    await db.collection('SALARY_NOTE').doc('note_1').set({
      Note_ID: "note_1",
      Emp_ID: "emp_1",
      Target_Month: "2026-09",
      Note_Type: "ימי מחלה",
      Amount: 300.0,
      Description: "יומיים מחלה עם אישור רופא",
      Created_At: new Date()
    });

    // 7. אוסף נוכחות חודשית
    await db.collection('ATTENDANCE').doc('att_1').set({
      Att_ID: "att_1",
      Emp_ID: "emp_1",
      Target_Month: "2026-09",
      Total_Regular_Hours: 120.5,
      Total_Overtime_125: 10.0,
      Total_Overtime_150: 0.0,
      Total_Work_Days: 18,
      Daily_Shifts: [
        {
          Shift_Date: new Date("2026-09-01"),
          Start_Time: new Date("2026-09-01T17:00:00"),
          End_Time: new Date("2026-09-02T01:00:00"),
          Hours_Worked: 8.0
        }
      ],
      Status: "Approved"
    });

    // 8. אוסף מכירות פר עובד
    await db.collection('MONTHLY_SALE').doc('sale_1').set({
      Sale_ID: "sale_1",
      Emp_ID: "emp_1",
      Target_Month: "2026-09",
      Total_Revenue: 15400.0,
      Categories: [
        {
          Cat_Ref: "cat_1",
          Products_Sold: [
            {
              Prod_Ref: "prod_1",
              Quantity: 5,
              Total_Price: 1400.0
            }
          ]
        }
      ]
    });

    // 9. אוסף גיבוי דוחות שכר (טיוטא ראשונית)
    await db.collection('PAYROLL_REPORT').doc('report_1').set({
      Report_ID: "report_1",
      Emp_ID: "emp_1",
      Target_Month: "2026-09",
      Calculated_Base_Pay: 4820.0,
      Tip_Addition_Calculated: 1200.0,
      Calculated_Bonuses: [
        {
          Bonus_Name: "בונוס מצטיין שירות",
          Amount_Awarded: 500.0,
          Target_Met: true
        }
      ],
      Applied_Salary_Notes: [
        {
          Note_ID: "note_1",
          Applied_Amount: 300.0
        }
      ],
      Final_Gross_Total: 6820.0,
      Generated_At: new Date()
    });

    // 10. אוסף גיבוי דוחות ביצועים (טיוטא ראשונית)
    await db.collection('BI_REPORT').doc('bi_1').set({
      BI_ID: "bi_1",
      Emp_ID: "emp_1",
      Target_Month: "2026-09",
      Total_Transactions: 45,
      Avg_Per_Diner: 342.2,
      Product_Sales_Breakdown: [
        {
          Prod_ID: "prod_1",
          Product_Name: "שאבלי פרמייר קרו",
          Category_Name: "יין ואלכוהול",
          Quantity_Sold: 5,
          Revenue_Generated: 1400.0
        }
      ],
      Generated_At: new Date()
    });

    console.log('✅ הזרקת הנתונים הסתיימה בהצלחה! כל 10 הקולקשיינים מוכנים.');
    process.exit(0);
  } catch (error) {
    console.error('❌ שגיאה ביצירת מסד הנתונים:', error);
    process.exit(1);
  }
}

seedFullDatabase();