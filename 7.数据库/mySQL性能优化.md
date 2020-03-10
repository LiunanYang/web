为查询缓存优化你的查询
EXPLAIN 你的 SELECT 查询
当只要一行数据时使用 LIMIT 1
为搜索字段建索引
在 Join 表的时候使用相当类型的例，并将其索引
千万不要 ORDER BY RAND()
避免 SELECT *
永远为每张表设置一个 ID
使用 ENUM 而不是 VARCHAR
从 PROCEDURE ANALYSE() 取得建议
尽可能的使用 NOT NULL
Prepared Statements
无缓冲的查询
把 IP 地址存成 UNSIGNED INT
固定长度的表会更快
垂直分割
拆分大的 DELETE 或 INSERT 语句
越小的列会越快
选择正确的存储引擎
使用一个对象关系映射器(Object Relational Mapper)
小心“永久链接”
