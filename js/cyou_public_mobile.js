/*
** cyou public
** Author: ZouJL
** Version: 1.8
** Date: 2014.11.28
*/
(function(){    
    // public function
    function site(name){ return 'http://'+name+'.changyou.com/';}
    // 秦时明月WEB 新追加函数sitewan
    function sitewan(name){ return 'http://'+name+'.wan.com/';}
    function sitepc(name){ return 'http://'+name+'.playcool.com/';}
    function sitead(name){ return 'http://adforward.changyou.com/'+name+'.html';}
    function siteadyy(name){ return 'http://adforward.yeyou.com/n/'+name+'.html';}
    function siteae(name){ return 'http://g.changyou.com/'+name+'.shtml';}
    function siteyy(name){ return 'http://'+name+'.yeyou.com/';}
    function sitebo(name){ return 'http://bo.account.changyou.com/'+name;}
    function sitemb(name){ return 'http://member.changyou.com/'+name;}
    function sitezc(name){ return 'http://zhuce.changyou.com/'+name;}
    function bbs(name){ name = name || ''; return 'http://bbs.changyou.com/'+name;}
    function regSMUrl(name){ return 'http://zhuce.changyou.com/regInit.act?gameType=PE-'+name;}
    function regUrl(name){ return 'http://zhuce.changyou.com/regInit.act?gameType=PE-'+name;}
    function gm(gameId){ return gameId ? 'http://gm.changyou.com/newTree.jsp?gameId=' + gameId : 'http://gm.changyou.com/';}
    function payUrl(gameId){ var url = 'http://chong.changyou.com/common/skip2game.do'; return url + (gameId ? '?gameType=' + gameId : '');}

    function hasClass(ele, cls) { 
        return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
    }
    function addClass(ele, cls) { 
        if (!hasClass(ele, cls)) ele.className += " "+cls;
    }
    function removeClass(ele, cls) {
        if (hasClass(ele, cls)) {
            var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
            ele.className = ele.className.replace(reg, ' ');
        }
    }
    /* className, rootId, tagName*/
    function getElementsByClassName(cls, rid, tag) {
        root = rid && document.getElementById(rid) || document;
        if (root.getElementsByClassName) {
            return root.getElementsByClassName(cls);
        }
        tag = tag || '*';
        var elems = root.getElementsByTagName(tag);
        var ret = [];
        for (var i = 0, len = elems.length; i < len; i++) {
            var elem = elems[i];
            if ((' ' + elem.className + ' ').indexOf(' ' + cls + ' ') > -1) {
                ret.push(elem);
            }
        }
        return ret;
    }
    var isIE         = !!window.ActiveXObject
        , isIE6      = isIE&&!window.XMLHttpRequest //(!-[1,]&&!window.XMLHttpRequest)
        , isIE8      = isIE&&!!document.documentMode
        , isIE7      = isIE&&!isIE6&&!isIE8
        , regOld     = 'http://account.changyou.com/reg/register.jsp'
        , readyBound = false
        , readyList  = []
        , isReady    = false
        , DOMContentLoaded;
    //电子图章
    var gameRFID = {
        qs2:"http://182.131.21.137/ccnt-apply/publicservice/applyonline/product/gameBase!gameNetTag.action?oprBean.id=DC93E2AB500B48F09D1C4C840509B45F",
        hz:"http://182.131.21.137/ccnt-apply/publicservice/applyonline/product/gameBase!gameNetTag.action?oprBean.id=176CCB81B88443F0AC26338A1124D1EB",
        xtl:"http://182.131.21.137/ccnt-apply/publicservice/applyonline/product/gameBase!gameNetTag.action?oprBean.id=6EE727A4B7E54D76A57C5B0182C9D5BB",        
        qsmy:"http://182.131.21.137/ccnt-apply/publicservice/applyonline/product/gameBase!gameNetTag.action?oprBean.id=80D5F045E58D4A7288F13F85A111EC95",
        tl3d:"http://182.131.21.137/ccnt-apply/publicservice/applyonline/product/gameBase!gameNetTag.action?oprBean.id=C4C9D3C314AC4A10AE02665D4F30C7F6"
    };
    //下拉里面三张广告图

//显示是true  不显示是false
    var datas = {
        threeAd: [{
        img:"http://i0.cy.com/www/public/nav/v2.4/20141107/ad1.jpg",
        link:"http://tl.changyou.com/",
        title:"新天龙八部",
        type:"pc",
        new_hot:"h",
        thumb:''//这个设置对应hover的tips图，再下面的datas.threeAd[0].thumb 里面设置，从游戏的配置里选择。
    },{
        img:"http://i0.cy.com/www/public/nav/v3.1/logo.jpg",
        link:"http://mjzr.cy.com/",
        title:"魔剑之刃",
        type:"m",
        new_hot:"n",
        thumb:''//这个设置对应hover的tips图，在datas.threeAd[1].thumb 里面设置，从游戏的配置里选择。
    }]
    ,noads: {
            ffo: true
            ,hxsy: true 
            ,xtl: false 
            /*, db: false */
            , ldj: true 
            , ty: true 
            , yz: true 
            , s: true 
            , tl3: false 
            , dj: false 
            , x6: true 
            , dpcq: true 
            , xsh: true 
            , x7: true
            , jd: true
            , dpol: true
            , eos: false
            , hz: true
            , tsj: true
            , x6w: true
            , eoser: false
            , iffo: false
            , TWJH: false
        }
        , regs: {
            www      : regUrl('ZHPT')
            , tl3    : regSMUrl('TL')
            , dhqt   : 'http://zhuce.changyou.com/regInit.act'
            , zhyx   : regSMUrl('ZHYX')
            , jx     : 'http://zhuce.changyou.com/regInit.act'//regSMUrl('JX')
            , gy     : regSMUrl('GY')
            , jd     : regSMUrl('JDCS')
            , sh2    : regSMUrl('SH2')
            , ldj    : regSMUrl('LDJ')
            , bf     : regSMUrl('ZD')
            , ty     : regSMUrl('TY')
            , dpcq   : regSMUrl('DPCQ')
            , s      : regSMUrl('S')
            , xsh    : regSMUrl('DHSH')
            , '720'  : regSMUrl('GAME720')
            , dj     : 'http://bo.account.changyou.com/reg/contract.jsp?game=DJ'
            , account: regUrl('ZHPT') // regOld
            , pay    : regUrl('ZHPT') // regOld
            , member : regUrl('ZHPT')
            , anquan : regUrl('ZHPT')
            , bbs    : regSMUrl('BBS')
            , jinka  : regSMUrl('ZHPT')
            , gm     : regSMUrl('ZHPT')
            , yhmx   : regSMUrl('YHMX')
            , 'x6'   : regSMUrl('XYJ')
            /*, db     : regSMUrl('DB')*/
            , ffo    : 'http://zhuce.changyou.com/regInit.act?gameType=hxsy&suffix=suffix'
            , iffo   : 'http://zhuce.changyou.com/regInit.act?gameType=hxsy&suffix=suffix'
            , eoser  : 'http://zhuce.changyou.com/regInit.act?gameType=eos&suffix=suffix'
            , eos    : 'http://zhuce.changyou.com/regInit.act?gameType=eos&suffix=suffix'
            , dfq    : 'http://zhuce.changyou.com/regInit.act?gameType=DFQ'
            , xtl    : 'http://zhuce.changyou.com/regInit.act?gameType=xtl'
            , hz    : 'http://zhuce.changyou.com/regInit.act?gameType=hz&suffix=suffix'
            , tsj    : 'http://zhuce.changyou.com/regInit.act?gameType=tsj&suffix=suffix'
            , x6w   : regSMUrl('X6W')
        }
        , payurl: {
            dj: sitebo('reg/manage.jsp')
            , boAccount: sitebo('reg/manage.jsp')
            ,eos:"http://chong.changyou.com/renew/commonChong.do?gameType=41&from=pt"
        }
		, payid: { // 充值地址根据id设定
            xtl: payUrl('3')
            /*, db: payUrl('30')*/
            , dpcq: payUrl('27')
            , xsh: payUrl('16')
            , ty: payUrl('24')
            , ldj: payUrl('20')
            , jd: payUrl('15')
            , gy: payUrl('19')
            , zhyx: payUrl('17')
            , zhgj: payUrl('21')
            , ffo: payUrl('31')
        }
       , noMonitor: false
        , noKejet: ' ' + ['tl3', 'ldj', 'dj', 'xsh', 'dpol', 'dpcq','TWJH',/*'db',*/'xtl'].join(' ') + ' '
        , noTopLogo: ' ' + ['x6', 'x7', 'yhmx'/*,'db'*/].join(' ') + ' '
        , noTopReg: ' ' + ['x6', 'x7', 'sh2'].join(' ') + ' '
        , noRecharge: ' ' + [''].join(' ') + ' '
        , pingtai: ' ' + ['member', 'protect', 'aq', 'gm', 'chong'].join(' ') + ' '
        , isbns: {
            def  : ''
            , tl3: '978-7-89989-283-1'
            , dj: '7-89995-705-2/J•037'
            , jd: '978-7-89487-689-8'
            , xsh: '978-7-89989-429-3'
            , gy: '978-7-89487-884-7'
            , ldj: '978-7-89989-109-4'
            , sh2: '978-7-89989-407-1'
            , dpcq: '978-7-89989-476-7'
            /*, db: '978-7-89989-764-5'*/
			, xtl: '978-7-89988-165-1'
            
        }
		, iscopyright: {
            def  : ''            
			, xtl: '2014SR092368'
            
        }
        , prewds:{
            def  : ''
            , tl3: '[2012]C-RPG025004'
            , dj: '[2010]C-RPG017'
            , jd: '[2010]C-RPG033'
            , xsh: '[2012]C-RPG078'
            , gy: '[2011]C-RPG069'
            , ldj: '[2011]C-RPG113'
            , sh2: '[2012]C-RPG024'
        }
        , prewds2: {            
            /*db: '[2013]021'*/
            ffo: '[2014]027',
            tsj: '[2014]041'
        }
        , prewds3: {            
            /*db: '[2013]021'*/
            ffo: '[2014]956'
        }        
        , gms: { 'ty': '247367546'}
        // c: class, t: title, h: href, boH: BO href, w: width, p: bg-position,
        , logos: [
            //common logo
            {c:'common_logo', t:'%u7545%u6E38%u79FB%u52A8', h:'http://www.cy.com/index.shtml', w:'90px', p:'0 -5px', w2:'160px', p2:'0 -121px'}, 
            //cyou logo
            {c:'cyou_logo', t:'%u7545%u6E38', h:site('www')+'index.shtml', w:'90px', p:'0 -5px', w2:'115px', p2:'0 -60px'}, 
            //playcool logo
            {c:'playcool_logo', t:'%u51B0%u52A8%u5A31%u4E50', h:sitepc('www'), w:'0', p:'-186px 0', w2:'137px', p2:'-120px -60px'},
            //dy logo
            {c:'dy_logo', t:'%u5927%u5B87', h:'http://www.softstar.com.tw/', w:'0', p:'-309px 0', w2:'66px', p2:'-270px -66px'},
            //domo logo
            {c:'domo_logo', t:'DoMo', w:'0', p:'-356px 0', w2:'130px', p2:'-340px -61px'} ,
            //KOG logo
            {c:'kog_logo', t:'KOG', w:'0', p:'-464px 0', w2:'75px', p2:'-470px -60px'} ,
			//JCR logo
			{c:'cr_logo', t:'JCR', w:'0', p:'-536px 0', w2:'89px', p2:'-560px -60px'},
            {c:'rfid_logo', t:'gameRFID', w:'0', p:'-536px 0', w2:'50px', p2:'-650px -57px'} 
			
        ]
        , bas: [
            //bei an
            {c:'cyou_bottom_beian', t:'%u7ECF%u8425%u6027%u7F51%u7AD9%u5907%u6848%u4FE1%u606F', h:'http://www.hd315.gov.cn/beian/view.asp?bianhao=010202008090900025', w:'32px', p:'0 0'}, 
            //wang jing ( police )
            {c:'cyou_bottom_police', t:'%u4E0A%u6D77%u7F51%u8B66%u7F51%u7EDC110', h:'http://sh.cyberpolice.cn/infoCategoryListAction.do?act=initjpg', w:'40px', p:'-32px 0'},
            //wang xin ( web msg )
            {c:'cyou_bottom_webmsg', t:'%u7F51%u7EDC%u793E%u4F1A%u5F81%u4FE1%u7F51', h:'http://www.zx110.org/', w:'110px', p:'-73px 0'}
        ]
        // top data
        , top: {
            ads: {//通用广告
                monitor :''
                , h     : 'http://tl3d.cy.com/'
                , img   : 'http://i0.cy.com/www/public/nav/v3.2/cytop_a1.jpg'
                , bigImg: 'http://i0.cy.com/www/public/nav/v3.2/cytop_a2.png'
            },
            other_game_ads:{//顶部广告定制，如果使用上面通用的，要把这里删掉。（格式通，通用广告），下面游戏如果开启广告会显示下面的。
//                 x7: {
//					monitor :''
//					, h     : 'http://bbs.cy.com/thread-21608-1-1.html'
//					, img   : 'http://i0.cy.com/www/public/nav/v2.5/cytop_a1.jpg'
//					, bigImg: 'http://i0.cy.com/www/public/nav/v2.5/cytop_a2.png'
//                 },
//                 x6: {
//					monitor :''
//					, h     : 'http://bbs.cy.com/thread-21608-1-1.html'
//					, img   : 'http://i0.cy.com/www/public/nav/v2.5/cytop_a1.jpg'
//					, bigImg: 'http://i0.cy.com/www/public/nav/v2.5/cytop_a2.png'
//                 }
//                 hxsy: {
//                     monitor :''
//                     , h     : 'http://ffo.changyou.com/main.shtml'
//                     , img   : 'http://i0.cy.com/www/public/nav/v2.5/ffo.jpg'
//                     , bigImg: 'http://i0.cy.com/www/public/nav/v2.5/ffo.png'
//                 },
//                 ffo: {
//                     monitor :''
//                     , h     : 'http://ffo.changyou.com/main.shtml'
//                     , img   : 'http://i0.cy.com/www/public/nav/v2.5/ffo.jpg'
//                     , bigImg: 'http://i0.cy.com/www/public/nav/v2.5/ffo.png'
//                 }
//                 iffo: {
//                     monitor :''
//                     , h     : 'http://eos.changyou.com/main.shtml'
//                     , img   : 'http://i0.cy.com/eos/pic/141030/cytop_a1.jpg'
//                     , bigImg: 'http://i0.cy.com/eos/pic/141030/cytop_a2.png'
//                 },
//                 eos: {
//                     monitor :''
//                     , h     : 'http://eos.changyou.com/main.shtml'
//                     , img   : 'http://i0.cy.com/eos/pic/141126/cytop_a1.jpg'
//                     , bigImg: 'http://i0.cy.com/eos/pic/141126/cytop_a2.png'
//                 }
//                 dpol: {
//                     monitor :''
//                     , h     : 'http://eos.changyou.com/main.shtml'
//                     , img   : 'http://i0.cy.com/eos/pic/141030/cytop_a1.jpg'
//                     , bigImg: 'http://i0.cy.com/eos/pic/141030/cytop_a2.png'
//                 },
//                 dpcq: {
//                     monitor :''
//                     , h     : 'http://eos.changyou.com/main.shtml'
//                     , img   : 'http://i0.cy.com/eos/pic/141030/cytop_a1.jpg'
//                     , bigImg: 'http://i0.cy.com/eos/pic/141030/cytop_a2.png'
//                 },
//                 ldj: {
//                     monitor :''
//                     , h     : 'http://eos.changyou.com/main.shtml'
//                     , img   : 'http://i0.cy.com/eos/pic/141030/cytop_a1.jpg'
//                     , bigImg: 'http://i0.cy.com/eos/pic/141030/cytop_a2.png'
//                 },
//                 dj: {
//                     monitor :''
//                     , h     : 'http://eos.changyou.com/main.shtml'
//                     , img   : 'http://i0.cy.com/eos/pic/141030/cytop_a1.jpg'
//                     , bigImg: 'http://i0.cy.com/eos/pic/141030/cytop_a2.png'
//                 },
//                 s: {
//                     monitor :''
//                     , h     : 'http://eos.changyou.com/main.shtml'
//                     , img   : 'http://i0.cy.com/eos/pic/141030/cytop_a1.jpg'
//                     , bigImg: 'http://i0.cy.com/eos/pic/141030/cytop_a2.png'
//                 },
//                 ty: {
//                     monitor :''
//                     , h     : 'http://eos.changyou.com/main.shtml'
//                     , img   : 'http://i0.cy.com/eos/pic/141030/cytop_a1.jpg'
//                     , bigImg: 'http://i0.cy.com/eos/pic/141030/cytop_a2.png'
//                 }
                
            },
            // PingTai
            pingtai: {
                'gm': [
                    [
                        {c:'login', t:'%u767B%u5F55', h:'http://auth.changyou.com/loginpage?s=http://gm.changyou.com/indexPage.do'}
                    ],
                    [
                        {c:'reg', t:'%u6CE8%u518C', h:regSMUrl('ZHPT')}
                    ],
                    [
                        {t:'%u670D%u52A1%u8FDB%u5EA6%u67E5%u8BE2', c:'FuWuJinDu', h:'http://gm.changyou.com/goMyService.do', o:"_hmt.push(['_trackEvent', 'yhdh', 'fuwujindu', '', ''])"},
                        {t:'%u7545%u6E38%u8BBA%u575B', c:'ChangyouLunTan', h:'http://bbs.changyou.com/cover.jsp', o:"_hmt.push(['_trackEvent', 'yhdh', 'bbs', '', ''])"},
                        {t:'%u5E2E%u52A9%u4E2D%u5FC3', c:'BangZhuZhongXin', h:sitemb('common/help.jsp')},
                        {t:'%u5BB6%u957F%u76D1%u62A4', c:'JiaZhangJianHu', h:'http://gm.changyou.com/html/parental/parentalIndex.html', o:"_hmt.push(['_trackEvent', 'yhdh', 'jiazhangjianhu', '', ''])"}
                    ]
                ],
                'protect': [ // l: the logout url
                    [
                        {c:'login', t:'%u767B%u5F55', h:'https://auth.changyou.com/login?s=http%3A%2F%2Fprotect.changyou.com'}
                    ],
                    [
                        {c:'reg', t:'%u6CE8%u518C', h:sitezc('regInit.act')}
                    ],
                    [
                        {t:'%u5E2E%u52A9%u4E2D%u5FC3', c:'BangZhuZhongXin', h:sitemb('common/help.jsp')},
                        {t:'%u5EFA%u8BAE%u53CD%u9988', c:'JianYiFanKui', h:'http://www.changyou.com/survey/survey.shtml'},                        
                        {t:'%u7F51%u7AD9%u5730%u56FE', c:'WangZhanDiTu', h:sitemb('common/map.jsp')}
                    ]
                ],
                'aq': [ // l: the logout url
                    [
                        {c:'login', t:'%u767B%u5F55', h:'https://auth.changyou.com/login?s=http%3A%2F%2Faq.changyou.com'}
                    ],
                    [
                        {c:'reg', t:'%u6CE8%u518C', h:sitezc('regInit.act')}
                    ],
                    [
                        {t:'%u5E2E%u52A9%u4E2D%u5FC3', c:'BangZhuZhongXin', h:sitemb('common/help.jsp')},
                        {t:'%u5EFA%u8BAE%u53CD%u9988', c:'JianYiFanKui', h:'http://www.changyou.com/survey/survey.shtml'},                        
                        {t:'%u7F51%u7AD9%u5730%u56FE', c:'WangZhanDiTu', h:sitemb('common/map.jsp')}
                    ]
                ],
                'chong': [
                    /*[
                        {c:'login', t:'%u767B%u5F55', h:'javascript:void(0);', tar:false}
                    ],*/
                    [
                        {c:'reg', t:'%u6CE8%u518C', h:regUrl('ZHPT')}
                    ],
                    [
                        {t:'%u5E2E%u52A9%u4E2D%u5FC3', c:'BangZhuZhongXin', h:'http://chong.changyou.com/common/wrapHelpMain.do'},
                        {t:'%u5EFA%u8BAE%u53CD%u9988', c:'JianYiFanKui', h:'http://www.changyou.com/survey/survey.shtml'},                        
                        {t:'%u7F51%u7AD9%u5730%u56FE', c:'WangZhanDiTu', h:'http://member.changyou.com/common/map.jsp'}
                    ]
                ],
                'member': [
                    [
                        {c:'login', t:'%u767B%u5F55', h:'https://auth.changyou.com/login?s=http%3A%2F%2Fmember.changyou.com'}
                    ],
                    [
                        {c:'reg', t:'%u6CE8%u518C', h:regUrl('ZHPT')}
                    ],
                    [
                        {t:'%u5E2E%u52A9%u4E2D%u5FC3', c:'BangZhuZhongXin', h:sitemb('common/help.jsp')},
                        {t:'%u5EFA%u8BAE%u53CD%u9988', c:'JianYiFanKui', h:'http://www.changyou.com/survey/survey.shtml'},                        
                        {t:'%u7F51%u7AD9%u5730%u56FE', c:'WangZhanDiTu', h:sitemb('common/map.jsp')}
                    ]
                ]
            },
            monitor: {//游戏链接 前段监测
                //xtl   : 'http://as.kejet.net/afaclick?u/UDJENEQyN0ZTRzNUc1Qk/o/MjVBQURCNDZGRUNEMEE5/m/N0FBOEJENTVDNThGNUUz?'
                  eos   :''
            },
            games: [{
                title: '%u5947%u5E7B%u6E38%u620F', // 奇幻游戏       
                // status => [1, 2, 3] = > [Hot game, New game, New and Hot game]
                list:[
                    {c:'ffo', t:'%u5E7B%u60F3%u795E%u57DF', h:site('ffo'), 'status':3, 'thumb':'http://i0.cy.com/www/public/nav/v2.4/20141107/ffo_03.jpg', 'desc':'' , 'imp':1},
                    {c:'eos', t:'%u7075%u9B42%u56DE%u54CD', h:site('eos'), 'status':3, 'thumb':'http://i0.cy.com/www/public/nav/v2.4/20141107/EOS_03.jpg', 'desc':''},
                    //{c:'tsj', t:'%u5929%u795E%u7EAA', h:site('tsj'), 'status':3, 'thumb':'http://i0.cy.com/www/public/nav/v2.4/20141107/tsj_03.jpg', 'desc':''},
                    {c:'dpcq', t:'%u6597%u7834%u82CD%u7A79OL', h:site('dpol'), 'status':3, 'thumb':'http://i0.cy.com/www/public/nav/v2.4/20141107/dpol_03.jpg', 'desc':''}
                ]
            },{
                title: '%u6B66%u4FA0%u6E38%u620F', // 武侠游戏         
                // status => [1, 2, 3] = > [Hot game, New game, New and Hot game]
                list:[
                    {c:'xtl', t:'%u65B0%u5929%u9F99%u516B%u90E8', h:site('xtl'), 'status':3, 'thumb':'http://i0.cy.com/www/public/nav/v2.4/20141107/xtl_03.jpg', 'desc':'', 'imp':1},
                    {c:'xsh', t:'%u65B0%u6C34%u6D52Q%u4F20', h:site('xsh'), 'status':3, 'thumb':'http://i0.cy.com/www/public/nav/v2.4/20141107/xsh_03.jpg', 'desc':''},
                    {c:'dj', t:'%u5200%u5251%u82F1%u96C4', h:site('dj'), 'status':3, 'thumb':'http://i0.cy.com/www/public/nav/v2.4/20141107/dj_03.jpg', 'desc':''},
                    {c:'ldj', t:'%u9E7F%u9F0E%u8BB0', h:site('ldj'), 'status':3, 'thumb':'http://i0.cy.com/www/public/nav/v2.4/20141107/ldj_03.jpg', 'desc':''},
                    {c:'ty', t:'%u6843%u56ED2.0', h:site('ty'), 'status':3, 'thumb':'http://i0.cy.com/www/public/nav/v2.4/20141107/ty_03.jpg', 'desc':''},
                    {c:'x7', t:'%u8F69%u8F95%u52517', h:site('x7'), 'status':3, 'thumb':'http://i0.cy.com/www/public/nav/v2.4/20141107/x7_03.jpg', 'desc':''},
                    {c:'jd', t:'%u4E5D%u9F0E%u4F20%u8BF4', h:site('jd'), 'status':3, 'thumb':'http://i0.cy.com/www/public/nav/v2.4/20141107/jd_03.jpg', 'desc':''}                    
                ]
            },{
                title: '%u7ADE%u6280%u6E38%u620F', // 竞技游戏         
                // status => [1, 2, 3] = > [Hot game, New game, New and Hot game]
                list:[
                    {c:'hz', t:'%u6D77%u6218%u4E16%u754C', h:site('hz'), 'status':3, 'thumb':'http://i0.cy.com/www/public/nav/v2.4/20141107/hz_03.jpg', 'desc':''}
                ]
            },{
                title: '%u5355%u673A%u6E38%u620F', // 单机游戏         
                // status => [1, 2, 3] = > [Hot game, New game, New and Hot game]
                list:[
                    {c:'x6', t:'%u8F69%u8F95%u52516', h:site('x6'), 'status':3, 'thumb':'http://i0.cy.com/www/public/nav/v2.4/20141107/x6_03.jpg', 'desc':''},
                    {c:'x6w', t:'%u8F69%u8F95%u5251%u5916%u4F20', h:site('x6w'), 'status':3, 'thumb':'http://i0.cy.com/www/public/nav/v2.4/20141107/x6w6_03.jpg', 'desc':''}
                ]
            },{
                title: '%u624B%u673A%u6E38%u620F', // 手机游戏        
                // status => [1, 2, 3] = > [Hot game, New game, New and Hot game]
                list:[
                    {c:'tl3d', t:'%u5929%u9F99%u516B%u90E83D', h:site('tl3d'), 'status':3, 'thumb':'http://i0.cy.com/www/public/nav/v2.4/20141107/tl3d_03.jpg', 'desc':'', 'imp':1},
                    {c:'qs2', t:'%u79E6%u65F6%u660E%u67082', h:site('qs2'), 'status':3, 'thumb':'http://i0.cy.com/www/public/nav/v2.4/20141107/qsmy_03.jpg', 'desc':'', 'imp':1},
                    {c:'mjzr', t:'%u9B54%u5251%u4E4B%u5203', h:site('mjzr'), 'status':3, 'thumb':'http://i0.cy.com/www/public/nav/v3.1/mjzr_03.jpg', 'desc':''},
                    {c:'xyj', t:'%u8F69%u8F95%u5251%u683C%u6597%u7248', h:site('xyj'), 'status':3, 'thumb':'http://i0.cy.com/www/public/nav/v2.5/bm_03.jpg', 'desc':''},
                    {c:'txqy', t:'%u5929%u4E0B%u7FA4%u82F1', h:'http://lnk8.cn/xdoUtg', 'status':3, 'thumb':'http://i0.cy.com/www/public/nav/v2.4/20141107/txqy.jpg', 'desc':''}
                ]
            }],
            services: [{
                title: '%u6211%u7684%u901A%u884C%u8BC1', // WoDeTongXingZheng
                list: [
                    {c: 'XiuGaiMiMa', t:'%u4FEE%u6539%u5BC6%u7801', h:sitemb('common/codeAdmin.do'), boH: sitebo('pwd/changepwd.jsp')},
                    {c: 'ShiMingRenZheng', t:'%u5B9E%u540D%u8BA4%u8BC1', h:sitemb('info/userinfo.do?pageTo=SSZ'), boH: sitebo('fangchenmi/query.jsp')},
                    {c: 'RenZhengShouJi', t:'%u8BA4%u8BC1%u624B%u673A', h:sitemb('myphone/getMyphone.do'), boH:'no'}
                ]
            },  {
                title: '%u5B89%u5168%u4E2D%u5FC3', // AnQuanZhongXin
                list: [
                    {c: 'MiBaoKa', t:'%u5BC6%u4FDD%u5361', h:'http://protect.changyou.com/card/showBindStatus.do', boH: sitebo('bindcard/bindCardStatus.jsp')},
                    {c: 'TieShenMiBao', t:'%u8D34%u8EAB%u5BC6%u4FDD', h:'http://protect.changyou.com/passpod/passpodAction.do', boH: sitebo('bindpasspod/firstbind1.jsp')},
                    {c: 'AnQuanXueTang', t:'%u5B89%u5168%u5B66%u5802', h:'http://protect.changyou.com/faq/secure-faq.jsp', boH:'no'}
                ]
            },{
                title: '%u5145%u503C%u4E2D%u5FC3', // ChongZhiZhongXin
                list: [
                    {c: 'ChongZhiZhongXin', t:'%u5145%u503C%u4E2D%u5FC3', h:'http://chong.changyou.com/', boH: sitebo('payment/gamechoice.jsp?type=dj')},
                    {c: 'ZaiXianGouKa', t:'%u5728%u7EBF%u8D2D%u5361', h:'http://chong.changyou.com/common/wrapCyb.do?type=106', boH: 'http://pay.changyou.com/online/boindex/index.jsp'},
                    {c: 'ChaXunChongZhiJiLu', t:'%u67E5%u8BE2%u5145%u503C%u8BB0%u5F55', h:'http://chong.changyou.com/common/wrapCyb.do?type=2', boH: 'http://pay.changyou.com/online/boindex/peakquery.jsp'}
                ]
            }, {
                title: '%u5BA2%u670D%u4E2D%u5FC3', // KeFuZhongXin
                list: [
                    {c: 'KeFuZhongXin', t:'%u5BA2%u670D%u4E2D%u5FC3', h:'http://gm.changyou.com', boH: 'http://gm.changyou.com/hub.jsp?source=DJ_service'},
                    {c: 'BeiDaoZhaoHui', t:'%u88AB%u76D7%u627E%u56DE', h:'http://gm.changyou.com/html/faq/description_1.html', boH: 'http://cs.changyou.com/html/protocal/protocal_104585857.shtml', tlH: 'http://gm.changyou.com/submit_issue.jsp?id=16304148&submit=0&t=1,1445,16303337,16303478&v=8b4d09c36e050a0ed1b657293481b6ee&p=0&gameId=1445'},
                    {c: 'ShouJiKeFu', t:'%u624B%u673A%u5BA2%u670D', h:'http://bang.changyou.com/'}
                ]
            },{
                title: '%u7545%u6E38%u4E50%u56ED', // Changyou Leyuan
                list: [
                    {c:'leyuanxiazai', t:'%u4E50%u56ED%u4E0B%u8F7D', h:'http://app.changyou.com/htmls/redirect.html?fw_url=http://app.changyou.com/cyhall/index.html'},
                    {c:'xinshouzhiyin', t:'%u65B0%u624B%u5F15%u5BFC', h:'http://app.changyou.com/htmls/redirect.html?fw_url=http://app.changyou.com/cyhall/help.html'}
                ]
            }]
        }
        // bottom data
        , bottom: [
            // Basic === 0
            [           

                [
                    {t:'%u5317%u4EAC%u7545%u6E38%u65F6%u4EE3%u6570%u7801%u6280%u672F%u6709%u9650%u516C%u53F8%u7248%u6743%u6240%u6709', c:'cp_cn'},
                    {t:'%20Copyright%20%A9%202011%20ChangYou.com%20Limited.%20All%20rights%20reserved.%20', c:'cp_en uppercase'},
                    {t:'%u6CD5%u5F8B%u58F0%u660E', h:'http://www.changyou.com/declaration.shtml'},
                    {t:'%20%7C%20'},
                    {t:'%u8054%u7CFB%u6211%u4EEC', h:site('www')+'cu.shtml'}
                ],
                [
                    {t:'%u4EAC%u7F51%u6587%5B2011%5D0260-093%u53F7', h:'http://i1.itc.cn/20120308/2b88_54fc22d2_d391_bb9a_99d7_672a89a5b7f0_1.jpg', c:'highlight'},
                    {t:'%20%7C%20'},
                    {t:'%u4EACICP%u8BC1%uFF1A'},
                    {t:'070525%u53F7%20', c:'highlight'},
                    {t:'',d:'%20%u6587%u7F51%u6E38%u5907%u5B57%uFF1A',n:'prewd', c:'highlight'},
                    {t:'',d:'%20%7C%20%u6587%u7F51%u8FDB%u5B57%uFF1A',n:'prewd2', c:'highlight'},
                    {t:'',d:'%20%7C%20%u65B0%u5E7F%u51FA%u5BA1%uFF1A',n:'prewd3', c:'highlight'},
                    {t:'',d:'%20ISBN%u53F7%uFF1A',n:'isbn', c:'highlight'},
					{t:'',d:'%u8457%u4F5C%u6743%u767B%u8BB0%u53F7%uFF1A',n:'iscy', c:'highlight'}
                ]
            ]
            // TY === 1
            , [         
                [
                    {t:'%u4E2D%u534E%u4EBA%u6C11%u5171%u548C%u56FD%u589E%u503C%u4E1A%u52A1%u7ECF%u8425%u8BB8%u53EF%u8BC1%u7F16%u53F7%uFF1A'},
                    {t:'%u6CAAB2-20070149', c:'highlight'}
                ],
                [
                    {t:'%u6587%u7F51%u6587%5B2010%5D162%u53F7', c:'highlight'},
                    {t:'%u6CAA%u65B0%u51FA%u97F3%u7BA1'},
                    {t:'%u30102014%u30110008-008%u53F7', c:'highlight'},
                    {t:'%20%A92011'}        
                ],
                [
                    {t:'%u5317%u4EAC%u7545%u6E38%u65F6%u4EE3%u6570%u7801%u6280%u672F%u6709%u9650%u516C%u53F8%u51B0%u52A8%u5A31%u4E50-'},
                    {t:'www.playcool.com', h:sitepc('www'), c:'uppercase'},
                    {t:'-%20%u7248%u6743%u6240%u6709'}      
                ]
            ]
            // www === 2
            , [
                [
                    {t:'%u5173%u4E8E%u7545%u6E38', h:site('www')+'1_1.shtml'},
                    {t:'&nbsp;&nbsp;%7C&nbsp;&nbsp;'}, 
                    {t:'%u6CD5%u5F8B%u58F0%u660E', h:'http://www.changyou.com/declaration.shtml'},       
                    {t:'&nbsp;&nbsp;%7C&nbsp;&nbsp;'},  
                    {t:'%u8054%u7CFB%u6211%u4EEC', h:site('www')+'cu.shtml'},
                    {t:'&nbsp;&nbsp;%7C&nbsp;&nbsp;'},
                    {t:'%u8BDA%u8058%u82F1%u624D', h:site('hr')+'welcome.xhtml'},
                    {t:'&nbsp;&nbsp;%7C&nbsp;&nbsp;'},
                    {t:'%u7948%u5B9D%u8BA1%u5212', h:site('qibao')},
                    {t:'&nbsp;&nbsp;%7C&nbsp;&nbsp;'},
                    {t:'%u7545%u6E38%u54C1%u724C%u6218%u7565%u8054%u76DF', h:site('hezuo')},    
                    {t:'&nbsp;&nbsp;%7C&nbsp;&nbsp;'},
                    {t:'%u6295%u8D44%u8005%u5173%u7CFB', h:site('www')+'ir/'}   
                ],  
                [
                    {t:'%u5317%u4EAC%u7545%u6E38%u65F6%u4EE3%u6570%u7801%u6280%u672F%u6709%u9650%u516C%u53F8%u7248%u6743%u6240%u6709', c:'cp_cn'},
                    {t:'&nbsp;&nbsp;%7C&nbsp;&nbsp;'},  
                    {t:'%20Copyright%20%A9%202011%20ChangYou.com%20Limited.%20All%20rights%20reserved.%20', c:'cp_en uppercase'}
                ],
                [
                    {t:'%u4EACICP%u8BC1%uFF1A'},
                    {t:'070525%u53F7', c:'highlight'},
                    {t:'&nbsp;&nbsp;%7C&nbsp;&nbsp;'},  
                    {t:'%u300A%u7F51%u7EDC%u6587%u5316%u7ECF%u8425%u8BB8%u53EF%u8BC1%u300B%u7F16%u53F7%uFF1A'},
                    {t:'%u4EAC%u7F51%u6587%5B2011%5D0260-093%u53F7', h:'http://i1.itc.cn/20120308/2b88_54fc22d2_d391_bb9a_99d7_672a89a5b7f0_1.jpg', c:'highlight'},
                    {t:'&nbsp;&nbsp;%7C&nbsp;&nbsp;'},  
                    {t:'%u4EAC%u516C%u7F51%u5B89%u5907110107000007', h:'http://www.hd315.gov.cn/beian/view.asp?bianhao=010202008090900025'}
                ]
            ]
            // bbs === 3
            , [
                [
                    {t:'Copyright%20%A9%202010%20ChangYou.com%20Limited.%20All%20rights%20reserved.', c:'cp_en uppercase'},
                    {t:'%u5317%u4EAC%u7545%u6E38%u65F6%u4EE3%u6570%u7801%u6280%u672F%u6709%u9650%u516C%u53F8%20%u7248%u6743%u6240%u6709', c:'cp_cn'}
                ],  
                [
                    {t:'%u4EACICP%u8BC1%uFF1A'},
                    {t:'070525%u53F7', c:'highlight'},
                    {t:'%20%7C%20'},
                    {t:'%u300A%u7F51%u7EDC%u6587%u5316%u7ECF%u8425%u8BB8%u53EF%u8BC1%u300B%u7F16%u53F7%uFF1A'},
                    {t:'%u6587%u7F51%u6587%5B2008%5D001%u53F7', h:'http://i0.itc.cn/20100901/38e_478fb4dd_f437_4355_b132_a7e0ca58d3df_0.jpg', c:'highlight'},
                    {t:'%20%7C%20'},
                    {t:'%u6CD5%u5F8B%u58F0%u660E', h:'http://account.changyou.com/inc/agreement.html'},
                    {t:'%20%7C%20'},
                    {t:'%u8054%u7CFB%u6211%u4EEC', h:site('www')+'cu.shtml'}
                ]
            ]
            // X6/x7 === 4
            , [         
                [
                    {t:'&nbsp;%u5317%u4EAC%u7545%u6E38%u65F6%u4EE3%u6570%u7801%u6280%u672F%u6709%u9650%u516C%u53F8%u7248%u6743%u6240%u6709', c:'cp_cn'},
                    {t:'%20Copyright%20%A9%202011%20ChangYou.com%20Limited.%20All%20rights%20reserved.%20', c:'cp_en uppercase'}                
                ],
                [
                    {t:'%u300A%u7F51%u7EDC%u6587%u5316%u7ECF%u8425%u8BB8%u53EF%u8BC1%u300B%u7F16%u53F7%uFF1A'},
                    {t:'%u4EAC%u7F51%u6587%5B2011%5D0260-093%u53F7', h:'http://i1.itc.cn/20120308/2b88_54fc22d2_d391_bb9a_99d7_672a89a5b7f0_1.jpg', c:'highlight'},
                    {t:'%20%7C%20'},
                    {t:'%u4EACICP%u8BC1%uFF1A'},
                    {t:'070525%u53F7', c:'highlight'},
                    {t:'',d:'%20ISBN%u53F7%uFF1A',n:'isbn', c:'highlight'},
                    {t:'&nbsp;&nbsp;%u6CD5%u5F8B%u58F0%u660E', h:'http://www.changyou.com/declaration.shtml'},
                    {t:'%20%7C%20'},
                    {t:'%u8054%u7CFB%u6211%u4EEC', h:site('www')+'cu.shtml'}
                ]
            ]
            // HR.CHANGYOU.COM === 5
            , [         
                [

                    {t:'Copyright%20%A9%202011%20ChangYou.com%20Limited.%20All%20rights%20reserved.%20', c:'cp_en uppercase'},
                    {t:'%u5317%u4EAC%u7545%u6E38%u65F6%u4EE3%u6570%u7801%u6280%u672F%u6709%u9650%u516C%u53F8%20%u7248%u6743%u6240%u6709', c:'cp_cn'},
                    {t:'%20%7C%20'},
                    {t:'%u6CD5%u5F8B%u58F0%u660E', h:'http://www.changyou.com/declaration.shtml'},
                    {t:'%20%7C%20'},
                    {t:'%u8054%u7CFB%u6211%u4EEC', h:site('www')+'cu.shtml'}
                ],
                [
                    {t:'%u4EACICP%u8BC1%uFF1A070525%u53F7'},
                    {t:'%20%7C%20'},
                    {t:'%u300A%u7F51%u7EDC%u6587%u5316%u7ECF%u8425%u8BB8%u53EF%u8BC1%u300B%u7F16%u53F7%uFF1A%u4EAC%u7F51%u6587%5B2011%5D0260-093%u53F7', h:'http://i1.itc.cn/20120308/2b88_54fc22d2_d391_bb9a_99d7_672a89a5b7f0_1.jpg', c:'highlight'},                 
                    {t:'%20%7C%20'},
                    {t:'%u4EAC%u516C%u7F51%u5B89%u5907110107000007'}
                ]
            ]
            // ffo === 6
            , [           

                [
                    {t:'%u5317%u4EAC%u7545%u6E38%u65F6%u4EE3%u6570%u7801%u6280%u672F%u6709%u9650%u516C%u53F8%u7248%u6743%u6240%u6709', c:'cp_cn'},
                    {t:'%20Copyright%20%A9%202011%20ChangYou.com%20Limited.%20All%20rights%20reserved.%20', c:'cp_en uppercase'},
                    {t:'%u6CD5%u5F8B%u58F0%u660E', h:'http://www.changyou.com/declaration.shtml'},
                    {t:'%20%7C%20'},
                    {t:'%u8054%u7CFB%u6211%u4EEC', h:site('www')+'cu.shtml'}
                ],
                [
                    {t:'%u4EAC%u7F51%u6587%5B2011%5D0260-093%u53F7', h:'http://i1.itc.cn/20120308/2b88_54fc22d2_d391_bb9a_99d7_672a89a5b7f0_1.jpg', c:'highlight'},
                    {t:'%20%7C%20'},
                    {t:'%u4EACICP%u8BC1%uFF1A'},
                    {t:'070525%u53F7%20', c:'highlight'},
                    {t:'',d:'%20%u6587%u7F51%u6E38%u5907%u5B57%uFF1A',n:'prewd', c:'highlight'},
                    {t:'',d:'%u6587%u7F51%u6E38%u8FDB%u5B57%uFF1A',n:'prewd2', c:'highlight'},
                    {t:'',d:'%20ISBN%u53F7%uFF1A',n:'isbn', c:'highlight'}
                ]
            ]
        ]
    };
    datas.threeAd[0].thumb = datas.top.games[1].list[0].thumb;//设置广告图tips后的展现大图
    datas.threeAd[1].thumb = datas.top.games[4].list[2].thumb;//设置广告图tips后的展现大图    
    // Styles
    var style = 
                'body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,p {padding:0;margin:0;}fieldset,img {border:0;}ol,ul{list-style:none; }:focus {outline:0;} \
                .cyou_top_animate_elem { -webkit-animation-delay: .2s; -moz-animation-delay: .2s; -ms-animation-delay: .2s; -o-animation-delay: .2s; animation-delay: .2s; -webkit-animation-duration: 1s; -moz-animation-duration: 1s; -ms-animation-duration: 1s; -o-animation-duration: 1s; animation-duration: 1s; -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; -webkit-animation-timing-function: ease; -moz-animation-timing-function: ease; -ms-animation-timing-function: ease; -o-animation-timing-function: ease; animation-timing-function: ease; -webkit-backface-visibility: hidden; -moz-backface-visibility: hidden; -ms-backface-visibility: hidden; -o-backface-visibility: hidden; backface-visibility: hidden; } \
                .cyou_top_tipsbox b, \
                .cyou_top_categroylist a, \
                .cyou_top_webgame, \
                .cyou_top_li_icon, \
                .cyou_top_gm_select_icon{ background-image:url(http://i0.cy.com/www/public/nav/v2.2/cyou_sprite.png); background-repeat:no-repeat; } \
                #cyou_top { position: relative; width: 100%; height: 55px; background: url(http://i0.cy.com/www/public/nav/v1.8/nav_bg.png) no-repeat center top; cursor: default; z-index: 99; min-width: 980px; } \
                #cyou_top a, \
                #cyou_bottom a { text-decoration: none; } \
                #cyou_top_main { position: relative; width: 980px; height: 50px; margin: 0 auto; color: #4a4a4a; font-family:"宋体"; font-size:12px; } \
                .cyou_top_logo, \
                .cyou_top_nav, \
                .cyou_top_ads { position: relative; z-index: 2; } \
                .cyou_top_logo a { display: block; float: left; width: 115px; height: 36px; text-indent: -9999em; } \
                .cyou_top_logo, \
                .cyou_top_ads { float: left; width: auto; height:50px; } \
                .cyou_top_logo { width: auto; height:36px; margin-top:6px; padding-right: 13px; border-right: 1px solid #CECECE; } \
                .cyou_top_ads { position: static; width: 240px; height: 50px; padding-left: 30px; text-align: center; z-index: 1; overflow: hidden; } \
                .cyou_top_ads a { display: block; height: 50px; margin: 0 auto; line-height: 0; font-size: 0; } \
                .cyou_top_ads_big { display: none; position: absolute; right: 0; top: 0; } \
                .cyou_top_nav { float: right; height: 41px; } \
                .cyou_top_nav_li { display: block; position: relative; float: left; width: auto; padding:0 10px; height: 50px; line-height: 50px; text-align: center; } \
                .cyou_pingtai_rig_bor_reg{border-right: solid 1px #dbdbdb;} \
                #cyou_top_main .cyou_top_nav_li_logined{ width:auto; line-height:50px; border-right:none; display:none;} \
                .cyou_top_nav_li a{ font-family:"宋体"; font-size:13px;} \
                #cyou_top_main .cyou_top_nav_li_logined a{background-color:#666; color:#fff; padding: 3px 5px;} \
                #cyou_top_main .cyou_top_nav_li_logined a:hover{ color:#fff;} \
                .cyou_top_pingtai { width: auto; padding: 0 10px; } \
                .cyou_top_pingtai a { line-height: 40px; } \
                .cyou_top_reg { color:8dc420;} \
                .cyou_top_arrow{ position:absolute;background:#f2f2f2; width:112px; height:6px; line-height:6px; right:-1px; top:-6px; font-size:0px; border-right:solid 1px #bbb;border-left:solid 1px #bbb;} \
                .cyou_top_game_list .cyou_top_arrow{top:-5px; z-index:10;} \
                #cyou_top_service .cyou_top_lists{ background:#fcfcfc;} \
                .cyou_top_tipsbox { _display: inline; float: left; width: 100%; padding: 0; line-height: 0; font-size: 0; } \
                .cyou_top_tipsbox b { display: block; background-position: -116px -125px; line-height: 50px; font-size: 12px; font-weight: normal; cursor: pointer; } \
                .cyou_top_tipsbox:hover b, \
                .cyou_top_tipsbox_clicked b { background-position: -116px -64px; background-color:#f2f2f2; color: #681683; } \
                #cyou_top_tips_gm .cyou_top_tipsbox:hover b, \
                #cyou_top_tips_gm .cyou_top_tipsbox_clicked b { background-position: -148px -64px; background-color:#f2f2f2; color: #681683; } \
                #cyou_top_tips_gm{width:82px;} \
                #cyou_top_tips_gm .cyou_top_tipsbox b{background-position: -148px -125px;} \
                #cyou_top_gm_select .cyou_top_arrow{width:82px;} \
                #cyou_top_gm_select .cyou_top_lists a{display: block; width:82px; padding-left:12px; height:30px; text-align:left; line-height:30px; background:#f2f2f2; } \
                #cyou_top_gm_select .cyou_top_lists a:hover .cyou_top_gm_select_icon { -webkit-transform: rotate(360deg); -moz-transform: rotate(360deg); transform: rotate(360deg); } \
                .cyou_top_gm_select_icon {display: inline-block;float: left;height: 18px;margin: 6px 3px 0 0;  *zoom:1; transition: transform 0.4s ease-out 0s; width: 18px;} \
                #cyou_top_gm_select .cyou_top_gm_icon_a{width:18px; height:18px; float:left; background-position:0 -129px; } \
                #cyou_top_gm_select .cyou_top_gm_icon_b{width:18px; height:18px; float:left;  background-position:0 -148px; } \
                #cyou_top_gm_select .cyou_top_gm_icon_c{width:18px; height:18px; float:left;  background-position:0 -167px; }\
                #cyou_top_gm_select .cyou_top_lists .cyou_top_gm_white{background:#fff;border-top:solid 1px #bbbbbb;} \
                .cyou_top_listbox h2 { display: block; height: 32px; border-bottom: 1px solid #DBDBDB; border-right: 1px solid #DBDBDB; text-indent:47px; background:#f2f2f2 url(http://i0.cy.com/www/public/nav/v1.8/service_tit.png) no-repeat;color: #4A4A4A; font: bold 12px/32px Tahoma,Geneva,sans-serif; text-align: left;  } \
                .cyou_top_lists { display: none; position: absolute; top: 50px; right: -1px; width: auto; background: #F2F2F2; border:solid 1px #bbbbbb;} \
                #cyou_top_games .cyou_top_lists{_width:740px;_zoom:1} \
                #cyou_top_service .cyou_top_lists { right: -1px; width: auto; }  \
                .cyou_top_categroylist a { display: block; float: left; width: 112px; height: 42px; line-height: 41px; color: #4A4A4A; font-size: 12px; text-align: left; text-indent: 15px; cursor: pointer; -webkit-transition: all .3s ease-out; -moz-transition: all .3s ease-out; -ms-transition: all .3s ease-out; -o-transition: all .3s ease-out; transition: all .3s ease-out; }  \
                #cyou_top_main .cyou_top_glist a.imp { color: #eb5122; }  \
                #cyou_top_main .cyou_top_glist a:hover, \
                #cyou_top_main .cyou_top_categroylist a:hover,  \
                #cyou_top_main .cyou_top_lists_wrap a.cyou_top_games_icon_clicked { color: #681683; } \
                #cyou_top_service .cyou_top_listbox { width: 328px; *zoom: 1; overflow: hidden; } \
                #cyou_top_service .cyou_top_categroylist { float: left; width: 336px; } \
                #cyou_top_service .cyou_service_tit0{ background-position:22px 7px;} \
                #cyou_top_service .cyou_service_tit1{ background-position:22px -33px;} \
                #cyou_top_service .cyou_service_tit2{ background-position:22px -73px;} \
                #cyou_top_service .cyou_service_tit3{ background-position:22px -113px;} \
                #cyou_top_service .cyou_service_tit4{ background-position:22px -153px;} \
                #cyou_top_service .cyou_top_categroylist a { background-position:0px -60px; height:34px; line-height:34px;} \
                #cyou_top_service .cyou_top_categroylist .cyou_service_cate_last a{ height:33px; line-height:33px;} \
                .cyou_top_tips { width: 112px; padding:0px; border:1px solid #E1E1E1; border-bottom:none; border-top:none; margin-left:-1px;} \
                .active_bor{border-color:#bbb; z-index:10;} \
                .cyou_top_li_icon { display: inline-block; width: 24px; height: 24px; margin: 11px 5px 0 0; *zoom:1; float:left; -webkit-transition: -webkit-transform .4s ease-out; -moz-transition: -moz-transform .4s ease-out; transition: transform .4s ease-out; } \
                .cyou_top_nav_li a:hover .cyou_top_li_icon { -webkit-transform: rotate(360deg); -moz-transform: rotate(360deg); transform: rotate(360deg); } \
                .cyou_top_reg_icon { background-position: -139px 0; } \
                .cyou_top_pay_icon { background-position: -189px 0; } \
                .cyou_top_jia_icon { background-position: 0 -104px; } \
                .cyou_top_gm_icon { background-position: -164px 0;} \
                .cyou_top_login_icon { background-position: -114px 0; } \
                .cyou_top_dropshow {position: absolute; right: 4px;top: 5px;width: 867px;height: 110px;border-bottom: solid 1px #bbb;   background: #BBBBBB url(http://i0.cy.com/www/public/nav/v2.4/tmp.jpg) 1px 1px no-repeat;} \
                .cyou_top_gameint { position: absolute; left: 20px; top: 95px; width: 200px; line-height: 22px; color: #ffffff; font-size: 12px; text-align: left; display:none; } \
                .cyou_top_webgame { display: block; position: absolute; bottom: -27px; right: -1px; width: 335px; height: 25px; border:solid 1px #bbb; line-height: 25px; color: #7256ff; font-size: 12px; text-align: center; text-indent: 15px; cursor: pointer; background-position:-130px -32px; background:none; background-color:#f2f2f2; font-weight:bold;} \
                .cyou_top_webgame:hover { color: #676868; } \
                #cyou_top_main a { color: #333333; } \
                #cyou_top_main .cyou_top_webgame {color:#7256ff;} \
                #cyou_top_main a:hover { color: #681683; } \
                #cyou_top_main .cyou_top_reg a:hover { color: #681683; } \
                #cyou_top_main .cyou_top_recharge a:hover { color: #681683; } \
                #cyou_top_main .cyou_top_gm a:hover { color: #681683; } \
                .cyou_top_logo a, .cyou_bottom_left a{background-image:url(http://i1.cy.com/www/public/nav/v2.3/logo_white.png?v); background-repeat:no-repeat;} \
                #cyou_bottom{width:100%;min-width:980px;height:80px;padding:10px 0;zoom:1;} \
                #cyou_bottom a{text-decoration:none;} \
                .cyou_bottom_wraper{border:none;border-collapse:collapse;padding:0;margin:0 auto;} \
                .cyou_bottom_wraper td{height:77px;vertical-align:middle;} \
                .cyou_bottom_left{text-align:right;} \
                .cyou_bottom_left a, .cyou_bottom_right a{height:52px;display:inline-block;zoom:1;text-align:left;} \
                .cyou_bottom_cont{text-align:left;padding:0 10px;} \
                .cyou_bottom_cont p{white-space:nowrap;} \
                .cyou_bottom_cont p .uppercase{ text-transform:uppercase; font-size:11px; -webkit-text-size-adjust:none;} \
                .cyou_bottom_left, .cyou_bottom_right{padding:0 5px;} \
                #cyou_bottom{ background:#f0f0f0 url(http://i0.cy.com/www/public/nav/v1.8/nav_bg.png) no-repeat center -55px; padding-top:20px;} \
                #cyou_bottom a{ color:#8e8e8e;} \
                #cyou_bottom a:hover{ color:#484848;} \
                #cyou_bottom .highlight{ color:#484848;} \
                #cyou_bottom, .cyou_bottom_cont p{ font:normal 12px/22px Tahoma, Geneva, sans-serif; color:#8e8e8e;} \
                .cyou_bottom_cont p{ padding-left:1px;} \
                .cyou_bottom_right a{ background-image:url(http://i1.cy.com/www/public/nav/cyou_copyright_sprite.png);background-repeat:no-repeat;height:48px;} \
                .cyou_top_game_list {display: none; width: 876px;height: 382px;position: absolute;right: 0px;top: 50px;} \
                .cyou_top_lists_wrap {position: absolute;top: 0px;right: 0px;width: 638px;height: 255px;border: solid 1px #dbdbdb;border-left: none;background: #fff;} \
                .tyou_top_gtype {width: 638px;height: 382px;position: relative;} \
                .cyou_top_tynum {width: 290px;position: absolute;} \
                .cyou_top_type1 {top: 2px; left: 11px;} \
                .cyou_top_type2 {top: 2px; left: 335px;} \
                .cyou_top_type3 {top: 97px;left: 10px; } \
                .cyou_top_type4 {top: 97px;left: 335px; } \
                .cyou_top_type5 {width: 616px;top: 170px;left: 10px;} \
                .cyou_top_ty_tit {line-height: 30px;font-size: 15px;text-align: left;color: #aaa;font-weight: bold;border-bottom: dashed 1px #d6d6d6;} \
                .cyou_top_glist {padding-top: 4px;height: 50px;position: relative; text-align: left;} \
                .cyou_top_glist dd {display: inline; *zoom: 1; position:relative; margin-left:1px;vertical-align: top; height: 24px; font-size: 12px;line-height: 24px;color: #333333;padding: 0px 18px 0px 0px;} \
                .cyou_top_glist dd a{color: #333333;} \
                .cyou_top_glist dd a:hover{color: #e47911;text-decoration: underline;} \
                .tyou_top_three_ad{left: 0px; top: 0px; position: absolute; border:solid 1px #d6d6d6; border-top: none;} \
                .tyou_top_three_ad img{vertical-align: top;} \
                .tyou_top_three_ad a{display: block; border-top: solid 1px #d6d6d6;} \
                .cyou_top_change{position: absolute; left: 0px; top: 257px; width: 874px; height: 124px; border:solid 1px #ccc; border-top: none; background: #fff;} \
                .cyou_top_rec{position: absolute; width: 876px; bottom: -1px; left: -1px; height: 5px; font-size: 0px; line-height: 0px; background: #ff6300;} \
                .cyou_top_hot, .cyou_top_new{position: absolute; left: 0px; top: 0px; width: 41px; height: 41px;} \
                .cyou_top_hot{z-index: 2; background: url(http://i0.cy.com/www/public/nav/v2.4/ico_hot_p24.png);_background:0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="http://i0.cy.com/www/public/nav/v2.4/ico_hot_p24.png",sizingMethod="scale"); } \
                .cyou_top_new{z-index: 2; background: url(http://i0.cy.com/www/public/nav/v2.4/ico_new_p24.png);_background:0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="http://i0.cy.com/www/public/nav/v2.4/ico_new_p24.png",sizingMethod="scale"); } \
                .cyou_top_th_ad_item{width: 236px; height: 128px; position: relative;} \
                .cyou_top_gm_type1, .cyou_top_gm_type2{position: absolute; right: 6px; bottom: 6px;} \
                .cyou_top_gm_type1{width: 16px; height: 16px; background: url(http://i0.cy.com/www/public/nav/v2.4/icon_pc.png);} \
                .cyou_top_gm_type2{width: 16px; height: 18px; background: url(http://i0.cy.com/www/public/nav/v2.4/icon_mob.png);} \
                .cyou_top_glist em{width: 10px; height: 11px; line-height: 0px; overflow: hidden; display: block; position: absolute; top: 6px; right: 0px;} \
                .cyou_top_glist .cyou_top_h{background: url(http://i0.cy.com/www/public/nav/v2.4/icon_h.png);} \
                .cyou_top_glist .cyou_top_n{background: url(http://i0.cy.com/www/public/nav/v2.4/icon_n.png);}';
		
    // CyouPublic
    function CyouPublic(){
        this.lic     = ['sg', 'db', 'tb']; //single, double, treble;    
        this.rownum  = 5; // number of row
        this.pu      = 'http://www.changyou.com/css/';
        //this.pu      = '/cyou_public/v2.2/';
        this.options = {name:'www', top:1, bottom:1, skins:[0,0,0], logos:[0], btmType:0, bas:[0], sld:''}; // sld: second-level directory
        this.version = '2.3';
        this.animationSupport = this.supports()('animation');
        this.init();
    };
    
    CyouPublic.prototype = {
        extend: function(d, s) {
            var value = null, property = null;
            if(d && s) {
                for (property in s) {
                    value = s[property];
                    if (value !== undefined) {
                        d[property] = value;
                    }
                }
                var sourceIsEvt = typeof window.Event == "function" && s instanceof window.Event;
                if (!sourceIsEvt && s.hasOwnProperty && s.hasOwnProperty('toString')) {
                    d.toString = s.toString;
                }
            }
            return d;
        }
        , supports: function() {
            var div = document.createElement('div'),
                vendors = 'Khtml Ms O Moz Webkit'.split(' '),
                len = vendors.length;
         
            return function(prop) {
                if ( prop in div.style ) return true;
        
                prop = prop.replace(/^[a-z]/, function(val) {
                    return val.toUpperCase();
                });
        
                while(len--) {
                    if ( vendors[len] + prop in div.style ) {
                        return true;
                    } 
                }
                return false;
            }
        }
        , animate: function( elem, f_props, t_props, opts ){

            if( !elem || !t_props ) return;
            
            var spd = (opts && opts.speed) || 450 // 动画执行时间
                , stp = (opts && opts.step) || 50 // 动画执行的帧数
                , idx = 1 // 帧数计数器
                , timer = null // 动画定时器
                , fp = f_props // 元素初始properties
                , tp = t_props; // 元素目标properties
            timer = setInterval(function(){
                anim( idx );
                idx++;
            }, Math.floor( stp / stp ) );

            function anim( idx ){
                for( p in tp ){
                    var unit = (p == 'opacity') ? '' : 'px';
                    elem.style[p] = fp[p] + ( tp[p] - fp[p] ) / stp * idx + unit;
                }
                if( idx>= stp ){
                    clearInterval( timer );
                    if( opts && opts.callback && typeof opts.callback == 'function' ){
                        opts.callback();
                    }
                }
            }
        }
        , setOptions: function(){
            var that = this
                , id = 'cyou_public_js'
                , opts={};
            if(document.getElementById(id) && document.getElementById(id).getAttribute('options')){
                opts =  eval("(" + document.getElementById(id).getAttribute('options') + ")");
            }
            var options = that.extend(that.options, opts);
            that.options = options;
            
            if(that.setVars){
                that.setVars(options);
            }
        }
        , getOptions: function(){
            return this.options;
        }
        , setVars: function(opts){
            var thesite    = opts.name
                , isBO     = (thesite=='dj') || (thesite=='boAccount')
                , thebbs   = (thesite == 'bf') ? 'ZD' : thesite
                , regurl   = function(){
                    var rv = ''; // reg value   
                    if( isBO ){
                        rv = sitebo('reg/contract.jsp?game=DJ');
                    }else if( datas.regs[thesite] ){
                        rv = datas.regs[thesite] + (opts.sld ? '-'+opts.sld.toUpperCase() : '');
                    }else{
                        rv = regOld + ( thesite=='www' ? '' : '?game='+thesite );
                    }
                    return rv;
                    //isBO ? sitebo('reg/contract.jsp?game=DJ') : ( datas.regs[thesite] ? (datas.regs[thesite] + opts.sld ? '-'+opts.sld.toUpperCase() : '') : (regOld + (thesite=='www' ? '' : '?game='+thesite)) )    
                }() 
                , payurl   = datas.payurl[thesite] ? datas.payurl[thesite] : datas.payid[thesite] ? datas.payid[thesite] : 'http://chong.changyou.com/' // 充值地址根据id设定
                //, gmurl    = isBO ? gm(1446) : gm(datas.gms[thesite])
                , gmurl    = isBO ? 'http://gm.changyou.com/hub.jsp?source=DJ_service' : gm(datas.gms[thesite])
                , boH      = isBO ? 'boH' : 'href'
                //, hackIt   = (document.compatMode == 'BackCompat') && (thesite == 'pay'); 
                , hackIt   = (document.compatMode == 'BackCompat')
                , isbn     = datas.isbns[thesite] ? datas.isbns[thesite] : datas.isbns['def']
				, iscy     = datas.iscopyright[thesite] ? datas.iscopyright[thesite] : datas.iscopyright['def']
                , prewd    = datas.prewds[thesite] ? datas.prewds[thesite] : datas.prewds['def']
                , prewd2   = datas.prewds2[thesite] || ''
                , prewd3   = datas.prewds3[thesite] || '';

            return this.vars = {
                thesite : thesite
                , isBO  : isBO
                , thebbs: thebbs
                , regurl: regurl
                , payurl: payurl
                , gmurl : gmurl
                , boH   : boH
                , hackIt: hackIt
                , isbn  : isbn
				, iscy  : iscy
                , prewd  : prewd
                , prewd2  : prewd2
                , prewd3  : prewd3
            }
        }
        , getVars: function(){
            return this.vars;
        }
        , noKejet: function(){
            var sitename = this.getOptions().name;
            if( datas.noKejet.indexOf( sitename ) != -1 ){
                var links = document.getElementsByTagName('a');
                for(var i=0, l=links.length; i<l; i++){      
                    var href = links[i].href || '';
                    if( href.indexOf('as.kejet.net') != -1 && href.indexOf('?http') != -1 ){
                        var idx = href.indexOf('?http')+1;
                        href = href.substring( idx );                       
                        links[i].href = href;
                    } 
                    /*links[i].onclick = (function(k){
                        return function(){
                            var href = links[k].href || '';
                            if( href.indexOf('as.kejet.net') != -1 && href.indexOf('?http') != -1 ){
                                var idx = href.indexOf('?http')+1;
                                href = href.substring( idx ); 
                                links[k].href = href;
                            }  
                        }                            
                    })(i);*/
                }
            }            
        }
        , tipsFn: function( parent ){

            if( !parent ) return;

            var that = this
                , child = parent.getElementsByTagName('div')[0]
                , tipsbar = parent.getElementsByTagName('b')[0]
                , dropshow = document.getElementById('cyou_top_dropshow')
                , anim = dropshow && dropshow.getAttribute('data-anim')
                , cyou_top = document.getElementById('cyou_top'); 

            parent.onmouseover = function(){
                parent.parentElement.className = 'cyou_top_tips cyou_top_nav_li active_bor';
                child.style.display = 'block';
                tipsbar.className = 'active';
                cyou_top.style.zIndex = '9999';
                if( that.animationSupport && anim ){
                    addClass( dropshow, anim );           
                }
            };
            parent.onmouseout = function(){
                parent.parentElement.className = 'cyou_top_tips cyou_top_nav_li';
                child.style.display = 'none';
                tipsbar.className = '';
                cyou_top.style.zIndex = '99';
                if( that.animationSupport && anim ){
                    removeClass( dropshow, anim );           
                }
            };
        }
        , tipsAds: function( parent ){
            
            if( !parent ) return;

            var imgs = parent.getElementsByTagName('img');
            var img0 = imgs[0], img1 = imgs[1], adAnim = img1.getAttribute('data-anim');            

            parent.onmouseover = function(){

                parent.style.overflow = 'visible';
                
                /*that.animate( img0, {
                    opacity: 1
                }, {
                    opacity: 0
                }, {
                    speed: 10,
                    callback: function(){
                        img1.style.display = 'block';
                    }
                });*/
                img0.style.display = 'none'; 
                img1.style.display = 'block';
                addClass( img1, adAnim );

            };
            parent.onmouseout = function(){
                
                removeClass( img1, adAnim );
                img1.style.display = 'none';                
                img0.style.display = 'block';

                parent.style.overflow = 'hidden';
                /*that.animate( img0, {
                    opacity: 0
                }, {
                    opacity: 1
                }, {
                    speed: 10,
                    callback: function(){
                        parent.style.overflow = 'hidden';
                    }
                });*/
            };  
        }
        , tipsLink: function( links ){
            var activeClass = 'cyou_top_games_icon_clicked'
                , that = this
                , dropshow = document.getElementById('cyou_top_dropshow')
                , dropshowTxt = dropshow.getElementsByTagName('div')[0]
                , anim = dropshow.getAttribute('data-anim')
                , parent = document.getElementById('cyou_top_games_link');
            
            if( !links || !links.length ) return;
            
            for( var i=0, l=links.length; i<l; i++ ){
                links[i].onmouseover = (function(a){
                    return function(){
                        var thisElem = links[a];
                        var thumb = thisElem.getAttribute('data-thumb');
                        var desc = thisElem.getAttribute('data-desc');
                        if( !thumb ) return ;
                        if( !that.animationSupport ){
                            dropshow.style.backgroundImage = 'url(' + thumb + ')';
                            //dropshowTxt.firstChild.nodeValue = desc;
                        }else{
                            removeClass( dropshow, anim );   
                            setTimeout(function(){
                                dropshow.style.backgroundImage = 'url(' + thumb + ')';
                                addClass( dropshow, anim );
                                //dropshowTxt.firstChild.nodeValue = desc;
                            }, 10);
                        } 
                        var actived = getElementsByClassName( activeClass, parent, 'a');
                        removeClass( actived[0], activeClass );
                        addClass( thisElem, activeClass );  
                    }
                })(i);
            }
        }
        , getBackgroundPosition: function(target){              
            if( target.currentStyle ){
                var a = target.currentStyle['backgroundPosition'] || 
                        target.currentStyle['backgroundPositionX']+' '+target.currentStyle['backgroundPositionY'] || 
                        '0 0';
                return a.split(' ');
            }else{
                var a = window.getComputedStyle(target, null).backgroundPosition || '0 0';
                return a.split(' ');
            }
        }
        // create logo
        , creLogo: function( flag ){ // flag: 1 -> top, else -> bottom
            var html        = []
                , opts      = this.getOptions()
                , cyou_logo = []
                , hasLogo   = false
                , logos     = datas.logos || {}
                , parmWid   = flag ? 'w' : 'w2'
                , parmPos   = flag ? 'p' : 'p2';

            if( !( datas.noTopLogo.indexOf( ' '+opts.name+' ' ) != -1 && flag) ){
                for( var i=0, _logos = opts.logos, _len=_logos.length; i<_len; i++ ){
                    var logos_i = logos[_logos[i]];
                    if( logos_i ){
                        cyou_logo.push(logos_i);
                        hasLogo = true;
                    }
                }
            }

            if( !hasLogo ) {
                cyou_logo.push( logos[0] );
            }

            for(var i=0, len=cyou_logo.length; i<len; i++){
                var cyou_logo_i = cyou_logo[i],
                    css_logo = 'width:' +cyou_logo_i[parmWid]+ ';background-position:' + cyou_logo_i[parmPos] +';';
                if(cyou_logo_i['h'] != undefined){
                    html.push('<a style="' +css_logo+ '" href="' +cyou_logo_i['h']+ '" target="_blank" title="' + unescape(cyou_logo_i['t'])+ '"></a>');    
                }else if(gameRFID[opts.name] != undefined) {
                    html.push('<a style="' +css_logo+ '" href="' +gameRFID[opts.name]+ '" target="_blank" title="' + unescape(cyou_logo_i['t'])+ '"></a>');
                }
                else{
                    html.push('<a style="' +css_logo+ ' cursor:default;" href="javascript:void(0);" title="' + unescape(cyou_logo_i['t'])+ '"></a>');       
                }
            }
            return html.join('');                   
        }
        // create top logo
        , creTopLogo: function(){
            var html = [];
            html.push( '<div class="cyou_top_logo">');
            html.push(this.creLogo(1));
            html.push('</div>');
            return html.join('');
        }
        // create ads
        , creAds: function(){

            var ads = datas.top.ads || {},
                noads = datas.noads,
                vars = this.getVars();
                if(datas.top.other_game_ads[vars.thesite]){
                    ads = datas.top.other_game_ads[vars.thesite];
                }
            if( !noads[vars.thesite] ) return '';
            // if( vars.thesite != 'x6' ) return '';
            // if( !ads.length ) return ''; // 对象没有length

            var links       = ads.h || ''
                , html      = ''
                , url       = '';

            if( links && links!='' ){
                url = (ads.monitor || '') + links;
            }else{
                url = 'javascript:void(0);';
            }

            html += 
                '<div class="cyou_top_ads"><a id="cyou_top_ads_box" target="_blank" href="'+ url + '"> \
                    <img class="cyou_top_animate_elem" data-anim="shake" src="' +ads.img +'" /> \
                    <img class="cyou_top_ads_big cyou_top_animate_elem" data-anim="fadeInDown" src="' +ads.bigImg +'"/> \
                </a></div>';

            return html;
        }
        // create nav
        , creNav: function(vars){

            var html = '<ul class="cyou_top_nav">';

            if( datas.pingtai.indexOf( ' '+vars.thesite+' ' ) != -1 ){
                html += this.crePingTai(vars);
            }else{
                if( datas.noTopReg.indexOf( ' '+vars.thesite+' ' ) == -1 ){
                    // Register
                    html += '<li class="cyou_top_reg cyou_top_nav_li"><a href="'+vars.regurl+'" target="_blank"><span class="cyou_top_li_icon cyou_top_reg_icon"></span>'+unescape('%u6CE8%u518C')+'</a></li>';
                    // Recharge
                    if( datas.noRecharge.indexOf( ' '+vars.thesite+' ' ) == -1  ){
                        html += '<li class="cyou_top_recharge cyou_top_nav_li"><a href="'+vars.payurl+'" target="_blank"><span class="cyou_top_li_icon cyou_top_pay_icon"></span>'+unescape('%u5145%u503C')+'</a></li>';
                    }
					if( vars.thesite != 'dj' ){
						//changyou+
						html += '<li class="cyou_top_jia cyou_top_nav_li"><a href="http://jia.changyou.com/" target="_blank"><span class="cyou_top_li_icon cyou_top_jia_icon"></span>'+unescape('%u7545%u6E38+')+'</a></li>';
					}
                    // GM      
                    //html += '<li class="cyou_top_gm cyou_top_nav_li"><a href="'+vars.gmurl+'" target="_blank"><span class="cyou_top_li_icon cyou_top_gm_icon"></span>'+unescape('%u5BA2%u670D')+'</a></li>';
                }else{
                    if( vars.thesite == 'x6' ){
                        //html += '<li class="cyou_top_reg cyou_top_nav_li"><a href="//detail.tmall.com/item.htm?id=25958100866&spm=a220z.1000881.0.42.Bj9DMX&bucket_id=19" target="_blank"><span class="cyou_top_li_icon cyou_top_pay_icon"></span>'+unescape('%u9884%u552E%u62A2%u8D2D')+'</a></li>';
                        html += '<li class="cyou_top_reg cyou_top_nav_li"><a href="'+vars.regurl+'" target="_blank"><span class="cyou_top_li_icon cyou_top_reg_icon"></span>'+unescape('%u514D%u8D39%u6CE8%u518C')+'</a></li>';
						//changyou+
						html += '<li class="cyou_top_jia cyou_top_nav_li"><a href="http://jia.changyou.com/" target="_blank"><span class="cyou_top_li_icon cyou_top_jia_icon"></span>'+unescape('%u7545%u6E38+')+'</a></li>';
                        html += '<li class="cyou_top_recharge cyou_top_nav_li"><a href="//x6.changyou.com/data/business.shtml" target="_blank"><span class="cyou_top_li_icon cyou_top_gm_icon"></span>'+unescape('%u5546%u52A1%u5408%u4F5C')+'</a></li>';
                    }else if( vars.thesite == 'b' ){
                        // Register
                        var alt = unescape('%u6B64%u529F%u80FD%u5DF2%u7ECF%u5173%u95ED%uFF0C%u8BE6%u60C5%u8BF7%u5173%u6CE8%u5B98%u7F51%u516C%u544A%uFF01');
                        html += '<li class="cyou_top_reg cyou_top_nav_li"><a href="javascript:void(0);" onclick="alert(\'' +alt+ '\');"><span class="cyou_top_li_icon cyou_top_reg_icon"></span>'+unescape('%u514D%u8D39%u6CE8%u518C')+'</a></li>';
                        // Recharge
                        html += '<li class="cyou_top_recharge cyou_top_nav_li"><a href="javascript:void(0);" onclick="alert(\'' +alt+ '\');"><span class="cyou_top_li_icon cyou_top_pay_icon"></span>'+unescape('%u5145%u503C')+'</a></li>';
                        // GM      
                       // html += '<li class="cyou_top_gm cyou_top_nav_li"><a href="'+vars.gmurl+'" target="_blank"><span class="cyou_top_li_icon cyou_top_gm_icon"></span>'+unescape('%u5BA2%u670D')+'</a></li>';
                    }
                }
                html += '<li class="cyou_top_tips cyou_top_nav_li" id="cyou_top_tips_gm">' + this.creGM(vars) + '</li>';    
                html += '<li class="cyou_top_tips cyou_top_nav_li">' + this.creService(vars) + '</li>';
                html += '<li class="cyou_top_tips cyou_top_nav_li">' + this.creGames(vars) + '</li>';
            }
                
            html += '</ul>';

            return html;
        }
        // create PingTai
        , crePingTai: function(vars){
            var that  = this
                , html= ''
                , p   = datas.top.pingtai[vars.thesite] || [];
            
            html += '<li class="cyou_top_nav_li cyou_top_nav_li_logined">' +unescape('%u6B22%u8FCE%u60A8%uFF1A')+ '<span id="cyou_top_username"></span> \
                        <a href="">' +unescape('%u9000%u51FA')+ '</a>' + unescape('%20%7C%20') +
                    '</li>';
                
            for(var i=0, l=p.length; i<l; i++){
                var pi = p[i];
                if( pi.length == 1 ){
                    var pi0 = pi[0];
                    var tar = pi0.tar==false ? '' : ' target="_blank"';
                    html += '<li class="cyou_pingtai_rig_bor_' +pi0.c+ ' cyou_top_nav_li"> \
                                <a' + tar + ' href="' +pi0.h+ '"> \
                                    <span class="cyou_top_li_icon cyou_top_' +pi0.c+ '_icon"></span>' +unescape(pi0.t)+ '</a> \
                            </li>';
                }else if( pi.length > 1 ){
                    html += '<li class="cyou_top_pingtai cyou_top_nav_li">';
                    var sp = unescape('%20%7C%20');
                    for(var j=0, k=pi.length; j<k; j++){
                        if( j>0 ){
                            html += sp;
                        }
                        var pj = pi[j];
                        var onclick = pj.o ? ' onclick="' + pj.o +'"' : '';
                        html += '<a target="_blank" href=' +pj.h+onclick+ '>' +unescape(pj.t)+ '</a>';
                    }
                    html += '</li>';
                }
            }
            return html;
        }
        //create GM
        ,creGM:function(vars){
            var that = this
            , html = ''
            , tmp = ''
            , opts = this.getOptions()
            , str_dj = '<a href="http://cs.changyou.com/" target="_blank"><span class="cyou_top_gm_select_icon cyou_top_gm_icon_a"></span>' +unescape('%u5728%u7EBF%u5BA2%u670D')+ '</a>'
            , str = '<a href="http://gm.changyou.com/" target="_blank"><span class="cyou_top_gm_select_icon cyou_top_gm_icon_a"></span>' +unescape('%u5728%u7EBF%u5BA2%u670D')+ '</a>\
                    <a href="http://bang.changyou.com/" target="_blank" class="cyou_top_gm_white" ><span class="cyou_top_gm_select_icon cyou_top_gm_icon_b"></span>' +unescape('%u624B%u673A%u5BA2%u670D')+ '</a>\
                    <a href="http://vip.changyou.com/" target="_blank" class="cyou_top_gm_white" ><span class="cyou_top_gm_select_icon cyou_top_gm_icon_c"></span>' +unescape('%u4F1A%u5458%u7F51%u7AD9')+ '</a>';
            if(opts.name == 'dj'){
                tmp = str_dj;
            }else{
               tmp = str;
            }
            html += '<div id="cyou_top_gm_select" class="cyou_top_tipsbox">\
                <b>'+unescape('%u5BA2%u670D')+'</b> \
                <div class="cyou_top_lists" >\
                    <div class="cyou_top_arrow"></div>'+ tmp +'</div>\
            </div>'
            return html;
        }
        // create games
        , creGames: function(vars){
            var that        = this
                , html      = ''
                , boH       = vars.boH
                //, games     = datas.top.games.list || []
                , monitor   = datas.top.monitor || {}
                , noMonitor = datas.noMonitor
                , th_ad     = datas.threeAd
                , th_html   = ''
                , th_tmp    = ''
                , th_n_w    = ''
                , gm_list   = datas.top.games
                , gm_con    = []
                , gm_html   = '';
                function gameInfo(data){
                    var str  = '',
                        list = '',
                        tmp  = '',
                        ie8  = '';
                    for (var i = 0; i < data.list.length; i++) {
                        if(data.list[i].status == 1){
                            tmp = '<em class="cyou_top_h"></em>'
                        }else if(data.list[i].status == 2){
                            tmp = '<em class="cyou_top_n"></em>';
                        }else{
                            tmp ='';
                        }
                        if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE6.0"){
                            ie8 ='';
                        }else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE7.0"){
                            ie8 ='';
                        }else{
                            ie8='style="display:inline-block;"';
                        }
                        var games_i = data.list[i]
                            , status = '';
                        var href = ( noMonitor || monitor[games_i['c']] ==undefined ) ? '' : monitor[games_i['c']];
                            href += games_i[boH] ? games_i[boH] : games_i['h'];
                        if(data.list[i].imp == 1){
							list += '<dd '+ ie8 +'>'+ tmp +'<a class="imp" href="'+ href +'"  data-desc="'+ data.list[i].desc +'" data-thumb="'+ data.list[i].thumb +'" target="_blank">'+ unescape(data.list[i].t) +'</a></dd>';
                        }else{
							list += '<dd '+ ie8 +'>'+ tmp +'<a href="'+ href +'"  data-desc="'+ data.list[i].desc +'" data-thumb="'+ data.list[i].thumb +'" target="_blank">'+ unescape(data.list[i].t) +'</a></dd>';
						}
                            data.list[i];
                    };
                    str +='<div class="cyou_top_ty_tit">'+ unescape(data.title) +'</div>\
                                <dl class="cyou_top_glist">'+ list +'</dl>';
                    return str;
                }
                for (var j = 0; j < gm_list.length; j++) {
                    gm_html += '<div class="cyou_top_tynum cyou_top_type'+ (j+1) +'">'+ gameInfo(gm_list[j]) +'</div>'
                };

                for (var k = 0; k < th_ad.length; k++) {
                    if(th_ad[k].new_hot == ''){
                            th_n_w = '';
                        }else if(th_ad[k].new_hot == 'h'){
                            th_n_w = '<em class="cyou_top_hot"></em>';
                        }else{
                            th_n_w = '<em class="cyou_top_new"></em>';
                    }
                    if(th_ad[k].type == 'pc'){
                            th_tmp = 1;
                        }else{
                            th_tmp = 2;
                    }
                    th_html += '<div class="cyou_top_th_ad_item">'+ th_n_w +'<span class="cyou_top_gm_type'+ th_tmp +'"></span><a href="'+ th_ad[k].link +'" data-thumb="'+ th_ad[k].thumb +'" target="_blank"><img src="'+ th_ad[k].img +'" title="'+ unescape(th_ad[k].title) +'"></a></div>';
                }

             html += '<div id="cyou_top_games" class="cyou_top_tipsbox"> \
                <b>'+unescape('%u7545%u6E38%u5168%u6E38%u620F')+'</b> \
                <div class="cyou_top_game_list">\
                    <div class="cyou_top_arrow"></div>\
                    <div class="cyou_top_lists_wrap" id="cyou_top_games_link">\
                        <div class="tyou_top_gtype">'+ gm_html +'</div>\
                    </div>\
                    <div class="tyou_top_three_ad" id="tyou_top_three_ad">'+ th_html +'</div>\
                    <div class="cyou_top_change">\
                        <div class="cyou_top_dropshow" data-anim="fadeInRight" id="cyou_top_dropshow">\
                            <div class="cyou_top_gameint"></div>\
                        </div>\
                        <div class="cyou_top_rec"></div>\
                    </div>\
            </div>';
            return html;
        }
        //create services
        , creService: function(vars){
            var that = this
                , html = ''
                , boH  = vars.boH
                , services = datas.top.services || {}
                , serviceLen = services.length;

            html += 
            '<div id="cyou_top_service" class="cyou_top_tipsbox"> \
                <b>'+unescape('%u7545%u6E38%u5168%u670D%u52A1')+'</b> \
                <div class="cyou_top_lists"> \
                    <div class="cyou_top_arrow"></div> \
                    <div class="cyou_top_listbox">';
            var ser_len = serviceLen-1;
            for(var i=0; i<serviceLen; i++){
                var cate_last = '';                
                if( !(vars.thesite != 'www' && i==serviceLen-1) ){
                    if(vars.thesite != 'www'){
                        ser_len = serviceLen-2;
                    }
                    if (ser_len == i){
                        cate_last = 'cyou_service_cate_last';
                    }
                    var services_i = services[i]
                        , k = services_i.list.length;

                    html += 
                    '<div class="cyou_top_categroylist"> \
                        <h2 class="cyou_service_tit'+ i +'">' + unescape(services_i.title)+ '</h2> \
                        <ul class="'+ cate_last +'">';

                    for(var j=0; j<k; j++){
                        if( services_i.list[j] != undefined ){
                            var services_i_j = services_i.list[j];
                            if(services_i_j[boH]!='no'){
                                html += '<li><a href="' +  (services_i_j[boH] ? services_i_j[boH] : (vars.thesite == 'tl3' && services_i_j['tlH'] ? services_i_j['tlH'] : services_i_j['h']) )  +'" target="_blank">' +unescape(services_i_j['t'])+'</a></li>';
                            }else{
                                html += '<li><a style="cursor:default;background-position:0 -60px;">&nbsp;</a></li>';
                            } 
                            
                        }else{
                            html += '<li><a style="cursor:default;background-position:0 -60px;">&nbsp;</a></li>';
                        }
                    }                    
                    html += 
                        '</ul> \
                    </div>';
                }
            }
            html += '</div> \
                </div> \
            </div>';
            return html;
        }
        //create the whole top
        , creTop: function(vars){
            return '<div id="cyou_top_main">'
                + this.creTopLogo()
                + this.creAds()
                + this.creNav(vars)
                + '</div>';
        }           
        , creCyouBottom: function(vars){    
            var that           = this
                , opts         = that.getOptions()
                , cyou_bottom  = datas.bottom || {}
                , cyou_ba      = []
                , btmType      = parseInt(opts.btmType)
                , cyou_bottoms = cyou_bottom[btmType] || cyou_bottom[0]
                , bas          = datas.bas || {}
                , html         = []
                , html1        = []
                , html2        = [];

            for( var i=0, _bas=opts.bas, len=_bas.length, hasBas=false; i<len; i++ ){
                var bas_i = bas[_bas[i]];
                if( bas_i ){
                    cyou_ba.push(bas_i);
                    hasBas = true;
                }
            }
            if(!hasBas) { cyou_ba.push(bas[0]); }   

            html.push('<table class="cyou_bottom_wraper"><tr>');    
            
            // Logo
            var logoLen = datas.logos.length;
            html.push('<td class="cyou_bottom_left">');
            html.push(this.creLogo());
            html.push('</td>');
            
            //Copyright
            html1.push('<td class="cyou_bottom_cont">');
            
            for(var i=0; i<cyou_bottoms.length; i++){
                html1.push('<p>');
                cyou_bottoms_i = cyou_bottoms[i];
                for(var j=0,len=cyou_bottoms_i.length; j<len; j++){
                    cyou_bottoms_j = cyou_bottoms_i[j];
                    var class_j = cyou_bottoms_j['c'] ? ' class="'+cyou_bottoms_j['c']+'"' : '';
                    var t = cyou_bottoms_j['t']=='' ? "" : unescape(cyou_bottoms_j['t']);
                    var d = cyou_bottoms_j['d']=='' ? "" : unescape(cyou_bottoms_j['d']); 
                    var p = "";
                    var num = "";
                    if(cyou_bottoms_j['n']){
                        p = vars[cyou_bottoms_j['n']] ;                        
                        if( cyou_bottoms_j['n'].indexOf('prewd') != -1 ){
                            num = unescape('%u53F7');
                        }else{
                            num = '';
                        }
                    }                       
                    //  var n = datas.prewd[isbns] ==cyou_bottoms_j['i'] ? unescape(cyou_bottoms_j['n']) : '';
                    if(cyou_bottoms_j['h']){
                        html1.push('<a href="' +cyou_bottoms_j['h']+ '" target="_blank"'+class_j+'>' +t+ '</a>');
                    }else {
                        if(!t && p){
                            html1.push('<span>'+d+'</span><span'+class_j+'>'+p+'</span>'+num);                               
                        }else if(t){                            
                            html1.push('<span'+class_j+'>'+t+'</span>');  
                        }
                                            
                    }
                }               
                html1.push('</p>');
            }    
            html1.push('</td>');
            
            //BeiAn
            html2.push('<td class="cyou_bottom_right">');
            for(var i=0; i<cyou_ba.length; i++){
                var cyou_ba_i = cyou_ba[i], 
                     css_ba = 'width:' +cyou_ba_i['w']+ ';background-position:' + cyou_ba_i['p'] +';'
                html2.push('<a style="' +css_ba+ '" href="' +cyou_ba_i['h']+ '" target="_blank" title="' +unescape(cyou_ba_i['t'])+ '"></a>');
            }
            html2.push('</td>');
            
            if(cyou_ba.length>1 || opts.basAlign == 'right'){
                html.push(html1.join('')+html2.join(''));   
            }else{ 
                html.push(html2.join('')+html1.join(''));   
            }
            
            html.push('</tr></table>');
            return html.join('');
        }       
        , ready: function(fn){
            bindReady();
            if(isReady){
                fn();
            }else{
                readyList.push(fn);
            }
            return this;
        }
        , addCssByStyle: function(css, id, target){
            var doc=document
                , style = doc.createElement('style');

            style.setAttribute('type', 'text/css');
            style.setAttribute('id', id);

            if(style.styleSheet){// IE
                  style.styleSheet.cssText = css;
            } else {// w3c
                  var cssText = doc.createTextNode(css);
                  style.appendChild(cssText);
            }
            if(target){
                target.appendChild(style);
            }else{
                doc.documentElement.appendChild(style);
            }
        }
        , init: function(){
            
            this.setOptions();

            var that   = this
                , opts = that.getOptions()
                , vars = this.getVars()
                , noads = datas.noads
                , doc  = document
                , head = document.getElementsByTagName('head')[0]
                , pu   = that.pu;
                
            that.addCssByStyle(style, 'cyou_public_css', head);
            // Top
            if(opts.top){
                
                function top(){
                    if( !document.body ){
                        return setTimeout( top, 10 );
                    }else{
                        /*if(opts.skins[0]){
                            var topCss = that.extend(doc.createElement('link'), {type:'text/css',rel:'stylesheet',href:pu+'cyou_public/top_'+opts.skins[0]+'.css'});
                            head.appendChild(topCss);
                        }*/

                        var body = document.body
                            , cyou_top = that.extend(doc.createElement('div'), {id: 'cyou_top', innerHTML: that.creTop(vars)});
                        body.insertBefore(cyou_top, body.firstChild);

                        var topAds = getElementsByClassName('cyou_top_ads', 'cyou_top_main', 'div')[0]
                            , animateElems = getElementsByClassName('cyou_top_animate_elem', 'cyou_top_main')
                            , tipsLinks = document.getElementById('cyou_top_games_link')
                            , tipsGameAds = document.getElementById('tyou_top_three_ad')
                            , topGM = document.getElementById('cyou_top_gm_select')
                            , topService = document.getElementById('cyou_top_service')
                            , topGames = document.getElementById('cyou_top_games');

                        tipsLinks = tipsLinks && tipsLinks.getElementsByTagName('a');
                        tipsGameAds = tipsGameAds && tipsGameAds.getElementsByTagName('a');

                        // GuangGaoDongHua
                        if( !that.animationSupport ){

                            var dropshow = document.getElementById('cyou_top_dropshow');
                            if( dropshow ){
                                dropshow.style.opacity = 1;
                                // alert(dropshow.filters.alpha.opacity)
                                //dropshow.filters && (dropshow.filters.alpha.opacity = 100);
                            }
                                 
                            that.animate( topAds, {
                                left: 0
                            }, {
                                left: 50
                            }, {
                                speed: 100,
                                callback: function(){
                                    that.animate( topAds, {
                                        left: 50
                                    }, {
                                        left: 0
                                    }, {
                                        speed: 100
                                    }); 
                                }
                            });
                        }else{
                            var animateCss = that.extend(doc.createElement('link'), {type:'text/css',rel:'stylesheet',href:pu+'cyou_public/cyou_top_animate.css'});
                            head.appendChild(animateCss);

                            setTimeout( function(){
                                for( var i=0, l=animateElems.length; i<l; i++ ){
                                    addClass( animateElems[i], animateElems[i].getAttribute('data-anim') );
                                }
                                setTimeout(function(){
                                    for( var i=0, l=animateElems.length; i<l; i++ ){
                                        removeClass( animateElems[i], animateElems[i].getAttribute('data-anim') );
                                    }
                                }, 1000)
                            }, 2000);
                        }  
                        that.tipsFn( topGM );
                        that.tipsFn( topService );
                        that.tipsFn( topGames );
                        
                        if( noads[vars.thesite] ){//是否显示顶部hover下拉广告
                            that.tipsAds( topAds );  
                        } 
                        
                        if( tipsLinks && tipsLinks.length ){
                            that.tipsLink( tipsLinks );
                            addClass( tipsLinks[0], 'cyou_top_games_icon_clicked' );
                        } 
                        if(tipsGameAds && tipsGameAds.length){
                            that.tipsLink( tipsGameAds );
                        }                          
                    }
                }
                top();                  
            }                       
            // Bottom
            if(opts.bottom){
                if( opts.skins[1] && opts.skins[1] != 'white' ){
                    var bottomCss = that.extend(doc.createElement('link'), {type:'text/css',rel:'stylesheet',href:pu+'cyou_public/bottom_'+opts.skins[1]+'.css'});
                    head.appendChild(bottomCss);
                }
            }
            // No W3C Doctype Hack! 
            if( vars.hackIt && isIE ){
                var hackCssIE = that.extend(doc.createElement('link'), {type:'text/css',rel:'stylesheet',href:pu+'cyou_public/ie.css'});
                head.appendChild(hackCssIE);
                /*if( isIE6 ){
                    var hackCssIE6 = that.extend(doc.createElement('link'), {type:'text/css',rel:'stylesheet',href:pu+'cyou_public/ie6.css'});
                    head.appendChild(hackCssIE6);
                }*/               
            }
            
        }
    };

    if (document.addEventListener){
        DOMContentLoaded = function() {
            document.removeEventListener( 'DOMContentLoaded', DOMContentLoaded, false );
            ready();
        };
    }
    else if (document.attachEvent){
        DOMContentLoaded = function(){
            if(document.readyState === 'complete'){
                document.detachEvent('onreadystatechange', DOMContentLoaded);
                ready();
            }
        };
    }
    function ready(){
        if ( !isReady ) {
            if ( !document.body ) { return setTimeout( ready, 13 ); }
            isReady = true;
            if ( readyList ) {
                var fn, i = 0;
                while ( (fn = readyList[ i++ ]) ) { fn();}
                readyList = null;
            }
        }   
    }
    function bindReady(){
        if (readyBound) { return; }
        readyBound = true;
        if (document.readyState==='complete'){return ready();}
        if (document.addEventListener){
            document.addEventListener('DOMContentLoaded', DOMContentLoaded, false);
            window.addEventListener('load', ready, false);
        } else if ( document.attachEvent ) {
            document.attachEvent('onreadystatechange', DOMContentLoaded);
            window.attachEvent('onload', ready);
        }
    };

    var cp = new CyouPublic();
    // init
    cp.ready(function(){
        var that      = cp
            , opts    = that.getOptions()
            , vars    = that.getVars()
            , doc     = document
            , body    = doc.body
            , head    = doc.getElementsByTagName('head')[0]
            , pu      = that.pu
            , isReady = document.body ? true : false;
            
        var bp = that.getBackgroundPosition(body);
        if( bp[1] == '77px' ||bp[1] == '44px' ){
            body.style.backgroundPosition = bp[0] + ' 55px';
        }                       
        // Bottom
        if(opts.bottom){            
            var cyou_bottom = that.extend(doc.createElement('div'), {id: 'cyou_bottom', innerHTML: that.creCyouBottom(vars)});
            body.appendChild(cyou_bottom);
        }
        // 检查去掉页面所有kejet监测
        that.noKejet();
    });

})();