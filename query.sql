USE ai_money_db;

SELECT  * FROM account_types;
SELECT * FROM accounts;
SELECT * FROM users;
SELECT * FROM providers;
SELECT * FROM roles;
SELECT * FROM transactions;
SELECT * FROM transaction_types;
SELECT * FROM states;
SELECT * FROM currencies;
SELECT * FROM plans;
SELECT * FROM settings;
SELECT * FROM goal_types;
SELECT * FROM onboardings;
SELECT * FROM budget_preferences;
SELECT * FROM goals;
SELECT * FROM analytics;
SELECT * FROM languages;
SELECT * FROM security_levels;
SELECT * FROM categories;

INSERT INTO transactions (
  description, amount, date, created_at,
  transaction_type_id, state_id, user_id, account_id, category_id
) VALUES
('Monthly Salary', 3500.00, '2025-10-01', CURRENT_DATE, 1, 1, 11, 8, 2),
('Dinner with friends', -45.90, '2025-10-10', CURRENT_DATE, 2, 1, 11, 9, 1),
('Transfer to Savings Account', -500.00, '2025-10-15', CURRENT_DATE, 2, 1, 11, 8, 3);

INSERT INTO accounts (name, account_type_id, balance, created_at, currency_id, user_id) VALUES
('Main Checking', 9, 2500.00, CURRENT_DATE, 1, 11),
('Emergency Savings', 10, 5200.50, CURRENT_DATE, 1, 11),
('Crypto Investments', 11, 18000.75, CURRENT_DATE, 1, 11),
('Credit Card', 12, -1200.00, CURRENT_DATE, 1, 11),
('Car Loan', 13, -8000.00, CURRENT_DATE, 1, 11),
('Travel Savings', 10, 3000.00, CURRENT_DATE, 1, 11),
('Retirement Fund', 11, 25000.00, CURRENT_DATE, 1, 11);


INSERT INTO account_types (name) VALUES
('Checking Account'),
('Savings Account'),
('Investment Account'),
('Credit Account'),
('Loan Account');

INSERT INTO categories(name)
VALUES ('income'),('food & dining'),('transportation'),('entertaiment'),('health'),('bills & utilities'),('shopping');

DELETE FROM account_types WHERE id = 12;
INSERT INTO languages (name)
VALUES ('english'),('spanish');
DROP TABLE settings;
DROP TABLE transactions;
DROP TABLE accounts;
DROP TABLE goals;
DROP TABLE goal_types;
DROP TABLE currencies;
DROP TABLE users;
DROP TABLE accounts;
DROP TABLE onboardings;
DROP TABLE ai_assistants;
DROP TABLE budgets;
DROP TABLE reports;
DROP TABLE debts;
DROP TABLE analytics;
DROP TABLE goals;

INSERT INTO account_types (name)
VALUES ('income'),('expenses');

INSERT INTO currencies(name,symbol)
VALUES
('COP', 'C'),('USD', 'USD');

INSERT INTO budget_preferences (name,description) 
VALUES 
('detailed tracking', 'track every expense and categorize all transactions'),
('simple overview', 'focus on big picture with minimal tracking'),
('AI-Powered automation', 'let AI categorize and provide insights automatically');

INSERT INTO goal_types (name,description) 
VALUES 
('build savings', 'create an emergency found or save for the future'),
('pay off debt', 'reduce or eliminate credit card or loan debts'),
('start investing', 'grow wealth throught investments');

DROP TABLE settings;

INSERT INTO settings (
  id, region, timezone, notification_enabled, created_at, user_id, plan_id, security_level_id, currency_id, language_id
) VALUES
(1, 'south America', 'GMT-5', TRUE, NOW(), 1, 2, 3, 1, 2),
(2, 'south America', 'GMT-5', TRUE, NOW(), 2, 1, 2, 1, 2),
(3, 'europe', 'GMT+1', FALSE, NOW(), 13, 3, 3, 3, 1);

INSERT INTO security_levels (id, name) VALUES
(1, 'low'),
(2, 'medium'),
(3, 'high');

INSERT INTO plans (id, name) VALUES
(1, 'Free'),
(2, 'Premium'),
(3, 'Enterprise');

INSERT INTO languages (name) VALUES
('English'),
('Spanish'),
('French');

DROP TABLE accounts;

INSERT INTO accounts (name, account_type_id, balance, created_at, currency_id, user_id
) VALUES
('Main Savings Account', 3, 2500000.00, NOW(), 1, 1),
('Daily Checking Account', 4, 850000.00, NOW(), 1, 2),
('Credit Card Account', 5, -450000.00, NOW(), 1, 1);

INSERT INTO currencies (name)
VALUES ('COP'),('USD'), ('EURO');
INSERT INTO transaction_types (name) 
VALUES ('income'),('expense');

INSERT INTO states(name)
VALUES ('pending'), ('completed'),('cancelled');

INSERT INTO account_types (name)
VALUES ('savings'),('checking'),('credit'),('investment');


INSERT INTO users (fullName,email,password,phone_number,address, bio, profile_picture,join_date,role_id,provider_id)
VALUES ('jose cardona','josesimonbarreto.design@gmail.com','testCardona','+573006233410','cr241','Graphic designer', 'http://', '2', 1,1);
DELETE FROM users WHERE id =3;
DELETE FROM account_types WHERE id =1;