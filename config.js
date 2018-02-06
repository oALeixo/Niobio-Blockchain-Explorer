var api = 'http://127.0.0.1:8314';
var blockTargetInterval = 240;
var coinUnits = 100000000;
var symbol = 'NBR';
var refreshDelay = 30000;
// pools stats by MainCoins
var networkStat = {
    "nbr": [
		["nbr.altpools.com", "http://nbr.altpools.com/api"],
		["nbr.4miner.me", "http://us-nbr.4miner.me:8118"],
        ["niobiocash.bytecoinbrasil.net", "http://niobiocash.bytecoinbrasil.net:8117"],
        ["nbr.selvahost.com.br", "http://nb.selvahost.com.br:8999"],
        ["nbr.ciapool.com", "http://nbr.ciapool.com:8117"],
        ["niobiopool.com.br", "http://niobiopool.com.br:8119"],
        ["stminerpool.com.br", "http://stminerpool.com.br:8117"],
        ["nbr-pool.ddns.net", "http://nbr-pool.ddns.net:8117"]
    ]
};

var networkStat2 = {
    "NBR": [
		["nbr.4miner.me", "http://us-nbr.4miner.me:8118"]
		]
};