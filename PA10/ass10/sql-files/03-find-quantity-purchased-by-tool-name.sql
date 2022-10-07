-- Your code here
SELECT tools.name, tools.price, purchases.quantity
FROM tools
JOIN purchases ON (purchases.tool_id = tools.id)
WHERE tools.name LIKE 'Pipe%'
ORDER BY tools.name, purchases.quantity;
