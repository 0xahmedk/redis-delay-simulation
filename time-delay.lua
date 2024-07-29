local delay = tonumber(ARGV[1])
local start = redis.call('TIME')
local start_time = start[1] * 1000 + math.floor(start[2] / 1000)

repeat
   local now = redis.call('TIME')
   local current_time = now[1] * 1000 + math.floor(now[2] / 1000)
until current_time - start_time >= delay

return 'done'