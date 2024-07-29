local aTempKey = "a-temp-key"
local cycles
redis.call("SET",aTempKey,"1")
redis.call("PEXPIRE",aTempKey, 10)
for i = 0, ARGV[1], 1 do
	local keyExists = redis.call("EXISTS",aTempKey)
	cycles = i;
	if keyExists == 0 then
		break;
	end
end
return cycles