(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[28],{228:function(t,e,a){"use strict";a.r(e);var n=a.p+"static/media/flower.1e05231c.png",i=a.p+"static/media/plume.40546dc8.png",c=a.p+"static/media/sands.47890ea0.png",s=a.p+"static/media/goblet.fb105aeb.png",r=a.p+"static/media/circlet.bf871ab6.png",o=a(95),l=a(357),d=a(40),m=a(0),p={name:"Adventurer",rarity:[3],icons:{flower:n,plume:i,sands:c,goblet:s,circlet:r},setEffects:{2:{stats:{hp:1e3}},4:{document:[{fields:[{text:Object(m.jsx)(o.a,{ns:"sheet_gen",key18:"healing"}),formulaText:function(t){return Object(m.jsxs)("span",{children:["30% ",d.b.printStat("finalHP",t)," * ",d.b.printStat("heal_multi",t)]})},formula:l.a.regen,variant:"success"}]}]}}},g=p,f=a.p+"static/media/flower.3935cb40.png",u=a.p+"static/media/plume.dfe96a7d.png",b=a.p+"static/media/sands.1b88a469.png",h=a.p+"static/media/goblet.c364d1e3.png",_=a.p+"static/media/circlet.63236f78.png",y={4:{name:"Obtaining Crystallize Shard",states:{pyro:{name:"Pyro",stats:{pyro_dmg_:35}},electro:{name:"Electro",stats:{electro_dmg_:35}},hydro:{name:"Hydro",stats:{hydro_dmg_:35}},cryo:{name:"Cryo",stats:{cryo_dmg_:35}}}}},j={name:"Archaic Petra",rarity:[4,5],icons:{flower:f,plume:u,sands:b,goblet:h,circlet:_},conditionals:y,setEffects:{2:{stats:{geo_dmg_:15}},4:{document:[{conditional:y[4]}]}}},w=j,x=a.p+"static/media/flower.c02a7f41.png",v=a.p+"static/media/plume.837e8b5c.png",O=a.p+"static/media/sands.c219ad2b.png",E=a.p+"static/media/goblet.b675a75c.png",S=a.p+"static/media/circlet.321a4496.png",k={4:{name:"HP below 70%",stats:{critRate_:24}}},T={name:"Berserker",rarity:[3,4],icons:{flower:x,plume:v,sands:O,goblet:E,circlet:S},conditionals:k,setEffects:{2:{stats:{critRate_:12}},4:{document:[{conditional:k[4]}]}}},D=T,P=a.p+"static/media/flower.dffc6372.png",R=a.p+"static/media/plume.04b35bc0.png",B=a.p+"static/media/sands.0e6cd041.png",A=a.p+"static/media/goblet.f66cea5d.png",F=a.p+"static/media/circlet.71ed366e.png",H={4:{name:"Attack enemy",states:{c:{name:"Affected By Cryo",stats:{critRate_:20}},f:{name:"Frozen",stats:{critRate_:40}}}}},M={name:"Blizzard Strayer",rarity:[4,5],icons:{flower:P,plume:R,sands:B,goblet:A,circlet:F},conditionals:H,setEffects:{2:{stats:{cryo_dmg_:15}},4:{document:[{conditional:H[4]}]}}},C=M,z=a.p+"static/media/flower.90eb2f30.png",W=a.p+"static/media/plume.84ca5601.png",G=a.p+"static/media/sands.5788c8a2.png",U=a.p+"static/media/goblet.46036e69.png",I=a.p+"static/media/circlet.c740e3ae.png",L={4:{name:"After defeating an opponent",stats:{charged_dmg_:50,staminaDec_:100}}},V={name:"Bloodstained Chivalry",rarity:[4,5],icons:{flower:z,plume:W,sands:G,goblet:U,circlet:I},conditionals:L,setEffects:{2:{stats:{physical_dmg_:25}},4:{document:[{conditional:L[4]}]}}},N=V,J=a.p+"static/media/flower.5da683e2.png",q=a.p+"static/media/plume.0c39b54c.png",K=a.p+"static/media/sands.28297dd9.png",Q=a.p+"static/media/goblet.70b13ba4.png",X=a.p+"static/media/circlet.5c8eefde.png",Y={4:{name:"Enemy with more than 50% HP",stats:{dmg_:30}}},Z={name:"Brave Heart",rarity:[3,4],icons:{flower:J,plume:q,sands:K,goblet:Q,circlet:X},conditionals:Y,setEffects:{2:{stats:{atk_:18}},4:{document:[{conditional:Y[4]}]}}},$=Z,tt=a.p+"static/media/sands.8c19d6aa.png",et=a.p+"static/media/plume.008da8ad.png",at=a.p+"static/media/flower.a3625cd2.png",nt=a.p+"static/media/goblet.caecf233.png",it=a.p+"static/media/circlet.a52fe562.png",ct={4:{name:"Using an Elemental Skill",maxStack:3,stats:{pyro_dmg_:7.5}}},st={name:"Crimson Witch of Flames",rarity:[4,5],icons:{flower:at,plume:et,sands:tt,goblet:nt,circlet:it},conditionals:ct,setEffects:{2:{stats:{pyro_dmg_:15}},4:{stats:{overloaded_dmg_:40,burning_dmg_:40,vaporize_dmg_:15,melt_dmg_:15},document:[{conditional:ct[4]}]}}},rt=st,ot=a.p+"static/media/flower.2d8b1432.png",lt=a.p+"static/media/plume.18f68f60.png",dt=a.p+"static/media/sands.5e681ad5.png",mt=a.p+"static/media/goblet.30393864.png",pt=a.p+"static/media/circlet.4d8c371c.png",gt={anemo:{name:"Anemo in party",stats:{anemo_res_:30}},geo:{name:"Geo in party",stats:{geo_res_:30}},electro:{name:"Electro in party",stats:{electro_res_:30}},hydro:{name:"Hydro in party",stats:{hydro_res_:30}},pyro:{name:"Pyro in party",stats:{pyro_res_:30}},cryo:{name:"Cryo in party",stats:{cryo_res_:30}}},ft={name:"Defender's Will",rarity:[3,4],icons:{flower:ot,plume:lt,sands:dt,goblet:mt,circlet:pt},conditionals:gt,setEffects:{2:{stats:{def_:30}},4:{document:[{conditional:gt.anemo},{conditional:gt.geo},{conditional:gt.electro},{conditional:gt.hydro},{conditional:gt.pyro},{conditional:gt.cryo}]}}},ut=ft,bt=a.p+"static/media/flower.03a26b70.png",ht=a.p+"static/media/plume.f8998212.png",_t=a.p+"static/media/sands.c0e7d7a5.png",yt=a.p+"static/media/goblet.14a77065.png",jt=a.p+"static/media/circlet.e8fcadf0.png",wt=a(358),xt=a(137),vt={name:"Emblem of Severed Fate",rarity:[4,5],icons:{flower:bt,plume:ht,sands:_t,goblet:yt,circlet:jt},conditionals:{4:{name:"Elemental Skill hits an opponent",states:{s1:{name:"1 Stack",stats:{atk_:9},fields:[{text:"Duration",value:"7s"}]},s2:{name:"2 Stacks",stats:{atk_:18,physical_dmg_:25},fields:[{text:"Duration",value:"7s"}]}}}},setEffects:{2:{stats:{enerRech_:20}},4:{stats:{modifiers:{burst_dmg_:[Object(xt.a)().artifact.EmblemOfSeveredFate.s4()]}},document:[{fields:[{text:"Elemental Burst DMG",formulaText:function(t){return Object(m.jsxs)("span",{children:["min ( 25% * ",d.b.printStat("enerRech_",t,!0)," , 75% )"]})},formula:wt.a.s4,fixed:1,unit:"%"}]}]}}},Ot={4:{name:"Defeating an enemy",stats:{skillCDRed_:100},fields:[{text:"CD",value:"15s"}]}},Et={name:"Gambler",rarity:[3,4],icons:{flower:a.p+"static/media/flower.67868a25.png",plume:a.p+"static/media/plume.3de87c17.png",sands:a.p+"static/media/sands.1348742f.png",goblet:a.p+"static/media/goblet.2fec87dd.png",circlet:a.p+"static/media/circlet.7ffbbe36.png"},conditionals:Ot,setEffects:{2:{stats:{skill_dmg_:20}},4:{document:[{conditional:Ot[4]}]}}},St={name:"Gladiator's Finale",rarity:[4,5],icons:{flower:a.p+"static/media/flower.4d301fa4.png",plume:a.p+"static/media/plume.28d79593.png",sands:a.p+"static/media/sands.23425783.png",goblet:a.p+"static/media/goblet.9daedb67.png",circlet:a.p+"static/media/circlet.e804bb32.png"},setEffects:{2:{stats:{atk_:18}},4:{stats:function(t){return"sword"===t.weaponType||"polearm"===t.weaponType||"claymore"===t.weaponType?{normal_dmg_:35}:{}}}}},kt=a.p+"static/media/flower.419ba3d2.png",Tt=a.p+"static/media/plume.c85a1908.png",Dt=a.p+"static/media/sands.347924be.png",Pt=a.p+"static/media/goblet.505b3b75.png",Rt=a.p+"static/media/circlet.b5742556.png",Bt=a(279),At={4:{name:Object(Bt.h)("afterUse.skill"),stats:{normal_dmg_:30,charged_dmg_:30}}},Ft={name:"Heart of Depth",rarity:[4,5],icons:{flower:kt,plume:Tt,sands:Dt,goblet:Pt,circlet:Rt},conditionals:At,setEffects:{2:{stats:{hydro_dmg_:15}},4:{document:[{conditional:At[4]}]}}},Ht=a.p+"static/media/flower.32295b79.png",Mt=a.p+"static/media/plume.2287fd8c.png",Ct=a.p+"static/media/sands.e464f3ca.png",zt=a.p+"static/media/goblet.642a9dcd.png",Wt=a.p+"static/media/circlet.7bb78835.png",Gt={4:{name:Object(Bt.h)("afterUse.skill"),stats:{eleMas:120}}},Ut={name:"Instructor",rarity:[3,4],icons:{flower:Ht,plume:Mt,sands:Ct,goblet:zt,circlet:Wt},conditionals:Gt,setEffects:{2:{stats:{eleMas:80}},4:{document:[{conditional:Gt[4]}]}}},It=a.p+"static/media/flower.c08f07ea.png",Lt=a.p+"static/media/plume.a281f44e.png",Vt=a.p+"static/media/sands.fc044fc2.png",Nt=a.p+"static/media/goblet.a7bc326b.png",Jt=a.p+"static/media/circlet.79ab8b58.png",qt=a(32),Kt={4:{name:Object(m.jsxs)("span",{children:["Enemies that are ",Object(m.jsx)(qt.a,{color:"burning",children:"Burning"})," or affected by ",Object(m.jsx)(qt.a,{color:"pyro",children:"Pyro"})]}),stats:{dmg_:35}}},Qt={name:"Lavawalker",rarity:[4,5],icons:{flower:It,plume:Lt,sands:Vt,goblet:Nt,circlet:Jt},conditionals:Kt,setEffects:{2:{stats:{pyro_res_:40}},4:{document:[{conditional:Kt[4]}]}}},Xt={name:"Lucky Dog",rarity:[3],icons:{flower:a.p+"static/media/flower.dacbeacd.png",plume:a.p+"static/media/plume.998d1a5c.png",sands:a.p+"static/media/sands.c5e3e0f2.png",goblet:a.p+"static/media/goblet.5c49d774.png",circlet:a.p+"static/media/circlet.73e2a8af.png"},setEffects:{2:{stats:{def:100}},4:{}}},Yt={4:{name:"Using an Elemental Skill or Burst",stats:{incHeal_:20}}},Zt={name:"Maiden Beloved",rarity:[4,5],icons:{flower:a.p+"static/media/flower.058025e1.png",plume:a.p+"static/media/plume.23241860.png",sands:a.p+"static/media/sands.2dbd4e8b.png",goblet:a.p+"static/media/goblet.5f1961eb.png",circlet:a.p+"static/media/circlet.152b3753.png"},conditionals:Yt,setEffects:{2:{stats:{heal_:15}},4:{document:[{conditional:Yt[4]}]}}},$t=a.p+"static/media/flower.7e7971ae.png",te=a.p+"static/media/plume.01b8c08c.png",ee=a.p+"static/media/sands.0f9e04b6.png",ae=a.p+"static/media/goblet.c4144e0b.png",ne=a.p+"static/media/circlet.aa6b6b4e.png",ie={4:{name:Object(Bt.h)("afterUse.skill"),stats:{normal_dmg_:25,charged_dmg_:25}}},ce={name:"Martial Artist",rarity:[3,4],icons:{flower:$t,plume:te,sands:ee,goblet:ae,circlet:ne},conditionals:ie,setEffects:{2:{stats:{normal_dmg_:15,charged_dmg_:15}},4:{document:[{conditional:ie[4]}]}}},se={4:{name:"Using an Elemental Burst",stats:{atk_:20}}},re={name:"Noblesse Oblige",rarity:[4,5],icons:{flower:a.p+"static/media/flower.0c959d66.png",plume:a.p+"static/media/plume.859357f9.png",sands:a.p+"static/media/sands.f177f0e0.png",goblet:a.p+"static/media/goblet.b2696785.png",circlet:a.p+"static/media/circlet.171108c7.png"},conditionals:se,setEffects:{2:{stats:{burst_dmg_:20}},4:{document:[{conditional:se[4]}]}}},oe={4:{name:"Elemental Skill hits an opponent",states:{s1:{name:"1 Stack",stats:{atk_:9},fields:[{text:"Duration",value:"7s"}]},s2:{name:"2 Stacks",stats:{atk_:18,physical_dmg_:25},fields:[{text:"Duration",value:"7s"}]}}}},le={name:"Pale Flame",rarity:[4,5],icons:{flower:a.p+"static/media/flower.ac5e4606.png",plume:a.p+"static/media/plume.091c7cbb.png",sands:a.p+"static/media/sands.69f779cf.png",goblet:a.p+"static/media/goblet.303ab43d.png",circlet:a.p+"static/media/circlet.b88ea7e6.png"},conditionals:oe,setEffects:{2:{stats:{physical_dmg_:25}},4:{document:[{conditional:oe[4]}]}}},de={name:"Prayers for Destiny",rarity:[3,4],icons:{circlet:a.p+"static/media/circlet.7ec1ab0e.png"},setEffects:{1:{stats:{}}}},me={name:"Prayers for Illumination",rarity:[3,4],icons:{circlet:a.p+"static/media/circlet.3f9693f6.png"},setEffects:{1:{stats:{}}}},pe={name:"Prayers for Wisdom",rarity:[3,4],icons:{circlet:a.p+"static/media/circlet.a37db9b6.png"},setEffects:{1:{stats:{}}}},ge={name:"Prayers to Springtime",rarity:[3,4],icons:{circlet:a.p+"static/media/circlet.34e39f73.png"},setEffects:{1:{stats:{}}}},fe={name:"Resolution of Sojourner",rarity:[3,4],icons:{flower:a.p+"static/media/flower.122f7227.png",plume:a.p+"static/media/plume.16061333.png",sands:a.p+"static/media/sands.9e609a84.png",goblet:a.p+"static/media/goblet.76feb2c0.png",circlet:a.p+"static/media/circlet.2a0ed1d7.png"},setEffects:{2:{stats:{atk_:18}},4:{stats:{charged_critRate_:30}}}},ue=a.p+"static/media/flower.3863936d.png",be=a.p+"static/media/plume.d41085f8.png",he=a.p+"static/media/circlet.ceeef23b.png",_e={4:{name:"With Shield",stats:{normal_dmg_:40,charged_dmg_:40}}},ye={name:"Retracing Bolide",rarity:[4,5],icons:{flower:ue,plume:be,sands:a.p+"static/media/sands.88b53df6.png",goblet:a.p+"static/media/goblet.ffe697ea.png",circlet:he},conditionals:_e,setEffects:{2:{stats:{shield_:35}},4:{document:[{conditional:_e[4]}]}}},je={name:"Scholar",rarity:[3,4],icons:{flower:a.p+"static/media/flower.8f5e2124.png",plume:a.p+"static/media/plume.163ee156.png",sands:a.p+"static/media/sands.8a43f444.png",goblet:a.p+"static/media/goblet.0810b752.png",circlet:a.p+"static/media/circlet.020ef2c6.png"},setEffects:{2:{stats:{enerRech_:20}},4:{}}},we={4:{name:"After using 15 energy",stats:{normal_dmg_:50,charged_dmg_:50,plunging_dmg_:50}}},xe={name:"Shimenawa's Reminiscence",rarity:[4,5],icons:{flower:a.p+"static/media/flower.88c3e855.png",plume:a.p+"static/media/plume.bf000760.png",sands:a.p+"static/media/sands.29f9e951.png",goblet:a.p+"static/media/goblet.19915595.png",circlet:a.p+"static/media/circlet.3b4914f6.png"},conditionals:we,setEffects:{2:{stats:{atk_:18}},4:{document:[{conditional:we[4]}]}}},ve={4:{name:"Elemental Skill hits an opponent",stats:{atk_:20,shield_:30}}},Oe={name:"Tenacity of the Millelith",rarity:[4,5],icons:{flower:a.p+"static/media/flower.078154c1.png",plume:a.p+"static/media/plume.840c0dec.png",sands:a.p+"static/media/sands.51dcf1b2.png",goblet:a.p+"static/media/goblet.e394c224.png",circlet:a.p+"static/media/circlet.8ea2b1ea.png"},conditionals:ve,setEffects:{2:{stats:{hp_:20}},4:{document:[{conditional:ve[4]}]}}},Ee={name:"The Exile",rarity:[3,4],icons:{flower:a.p+"static/media/flower.da223517.png",plume:a.p+"static/media/plume.dedfd1b6.png",sands:a.p+"static/media/sands.bf5f1423.png",goblet:a.p+"static/media/goblet.31afd370.png",circlet:a.p+"static/media/circlet.79220746.png"},setEffects:{2:{stats:{enerRech_:20}},4:{}}},Se={name:"Thundering Fury",rarity:[4,5],icons:{flower:a.p+"static/media/flower.67c8e44a.png",plume:a.p+"static/media/plume.89f96f71.png",sands:a.p+"static/media/sands.c8be6b5a.png",goblet:a.p+"static/media/goblet.87b4ebb5.png",circlet:a.p+"static/media/circlet.d03509ba.png"},setEffects:{2:{stats:{electro_dmg_:15}},4:{stats:{overloaded_dmg_:40,electrocharged_dmg_:40,superconduct_dmg_:40}}}},ke=a.p+"static/media/flower.ac9747bf.png",Te=a.p+"static/media/plume.956b6070.png",De=a.p+"static/media/sands.3e4cfcfa.png",Pe=a.p+"static/media/goblet.cb5c813f.png",Re=a.p+"static/media/circlet.18651435.png",Be={4:{name:Object(m.jsxs)("span",{children:["Enemies affected by ",Object(m.jsx)(qt.a,{color:"electro",children:"Electro"})]}),stats:{dmg_:35}}},Ae={name:"Thundersoother",rarity:[4,5],icons:{flower:ke,plume:Te,sands:De,goblet:Pe,circlet:Re},conditionals:Be,setEffects:{2:{stats:{electro_res_:40}},4:{document:[{conditional:Be[4]}]}}},Fe=a.p+"static/media/flower.3f114b1e.png",He=a.p+"static/media/plume.7ad465eb.png",Me=a.p+"static/media/sands.2c9ae524.png",Ce=a.p+"static/media/goblet.04546495.png",ze=a.p+"static/media/circlet.8e9e1cdb.png",We={4:{name:"Incoming DMG",states:{anemo:{name:Object(m.jsx)(qt.a,{color:"anemo",children:"Anemo"}),stats:{anemo_res_:30}},geo:{name:Object(m.jsx)(qt.a,{color:"geo",children:"Geo"}),stats:{geo_res_:30}},electro:{name:Object(m.jsx)(qt.a,{color:"electro",children:"Electro"}),stats:{electro_res_:30}},hydro:{name:Object(m.jsx)(qt.a,{color:"hydro",children:"Hydro"}),stats:{hydro_res_:30}},pyro:{name:Object(m.jsx)(qt.a,{color:"pyro",children:"Pyro"}),stats:{pyro_res_:30}},cryo:{name:Object(m.jsx)(qt.a,{color:"cryo",children:"Cryo"}),stats:{cryo_res_:30}}},fields:[{text:"CD",value:"10s"}]}},Ge={name:"Tiny Miracle",rarity:[3,4],icons:{flower:Fe,plume:He,sands:Me,goblet:Ce,circlet:ze},conditionals:We,setEffects:{2:{stats:{anemo_res_:20,geo_res_:20,electro_res_:20,hydro_res_:20,pyro_res_:20,cryo_res_:20}},4:{document:[{conditional:We[4]}]}}},Ue=a.p+"static/media/flower.0d2c0aaf.png",Ie=a.p+"static/media/plume.853d72d8.png",Le=a.p+"static/media/sands.d4148751.png",Ve=a.p+"static/media/goblet.6d92a6ac.png",Ne=a.p+"static/media/circlet.5a6cc9a5.png",Je=a(359),qe={4:{name:Object(m.jsx)("span",{children:"Using Elemental Burst"}),fields:[{text:Object(m.jsx)(o.a,{ns:"sheet_gen",key18:"healing"}),formulaText:function(t){return Object(m.jsxs)("span",{children:["20% ",d.b.printStat("finalHP",t)," * ",d.b.printStat("heal_multi",t)]})},formula:Je.a.regen,variant:"success"}]}},Ke={name:"Traveling Doctor",rarity:[3],icons:{flower:Ue,plume:Ie,sands:Le,goblet:Ve,circlet:Ne},conditionals:qe,setEffects:{2:{stats:{incHeal_:20}},4:{document:[{conditional:qe[4]}]}}},Qe=a(7),Xe=a(3),Ye=a.p+"static/media/flower.78f9a382.png",Ze=a.p+"static/media/plume.fdfba7f4.png",$e=a.p+"static/media/sands.c326b170.png",ta=a.p+"static/media/goblet.89409f60.png",ea=a.p+"static/media/circlet.cadf7990.png",aa=a(63),na={4:{name:"Element Swirled",states:Object.fromEntries(Object.entries(aa.a).filter((function(t){var e=Object(Xe.a)(t,1)[0];return"anemo"!==e&&"geo"!==e&&"physical"!==e})).map((function(t){var e=Object(Xe.a)(t,2),a=e[0],n=e[1].name;return[a,{name:Object(m.jsx)("span",{className:"text-".concat(a),children:n}),stats:Object(Qe.a)({},"".concat(a,"_enemyRes_"),-40)}]})))}},ia={name:"Viridescent Venerer",rarity:[4,5],icons:{flower:Ye,plume:Ze,sands:$e,goblet:ta,circlet:ea},conditionals:na,setEffects:{2:{stats:{anemo_dmg_:15}},4:{stats:{swirl_dmg_:60},document:[{conditional:na[4]}]}}},ca={name:"Wanderer's Troupe",rarity:[4,5],icons:{flower:a.p+"static/media/flower.ac7f960d.png",plume:a.p+"static/media/plume.35d40622.png",sands:a.p+"static/media/sands.03e22fa4.png",goblet:a.p+"static/media/goblet.af4a544d.png",circlet:a.p+"static/media/circlet.b71d0d8f.png"},setEffects:{2:{stats:{eleMas:80}},4:{stats:function(t){return"catalyst"===t.weaponType||"bow"===t.weaponType?{charged_dmg_:35}:{}}}}},sa=a(335),ra={Adventurer:g,ArchaicPetra:w,Berserker:D,BlizzardStrayer:C,BloodstainedChivalry:N,BraveHeart:$,CrimsonWitchOfFlames:rt,DefendersWill:ut,EmblemOfSeveredFate:vt,Gambler:Et,GladiatorsFinale:St,HeartOfDepth:Ft,Instructor:Ut,Lavawalker:Qt,LuckyDog:Xt,MaidenBeloved:Zt,MartialArtist:ce,NoblesseOblige:re,PaleFlame:le,PrayersForDestiny:de,PrayersForIllumination:me,PrayersForWisdom:pe,PrayersToSpringtime:ge,ResolutionOfSojourner:fe,RetracingBolide:ye,Scholar:je,ShimenawasReminiscence:xe,TenacityOfTheMillelith:Oe,TheExile:Ee,ThunderingFury:Se,Thundersoother:Ae,TinyMiracle:Ge,TravelingDoctor:Ke,ViridescentVenerer:ia,WanderersTroupe:ca};Object.values(ra).forEach((function(t){return Object.values(t.setEffects).forEach((function(t){t.document&&Object(sa.a)(t.document)}))}));e.default=ra},275:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return c}));var n=a(111);function i(t,e,a,i){var c=t/100,s=Object(n.c)(a,e,i);return[function(t){return c*t[s]},[s]]}function c(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=t/100;return[function(t){return(n*t[e]+a)*t.heal_multi},[e,"heal_multi"]]}},279:function(t,e,a){"use strict";a.d(e,"h",(function(){return m})),a.d(e,"g",(function(){return p})),a.d(e,"e",(function(){return g})),a.d(e,"b",(function(){return f})),a.d(e,"c",(function(){return u})),a.d(e,"f",(function(){return b})),a.d(e,"d",(function(){return h})),a.d(e,"a",(function(){return _})),a.d(e,"i",(function(){return y}));var n,i=a(5),c=a(46),s=a(11),r=a(111),o=a(95),l=a(40),d=a(0),m=function(t){return Object(d.jsx)(o.a,{ns:"sheet",key18:t})},p=function(t){return Object(d.jsx)(o.a,{ns:"sheet_gen",key18:t})},g=function(t,e,a){return{text:t("auto.fields.normal"),fields:a.normal.hitArr.map((function(t,a){return{text:p("normal.hit".concat(a+1)),formulaText:function(e){return Object(d.jsxs)("span",{children:[t[e.tlvl.auto],"% ",l.b.printStat(Object(r.c)("normal",e),e)]})},formula:e.normal[a],variant:function(t){return Object(r.d)("normal",t)}}}))}},f=function(t,e,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:25;return{text:t("auto.fields.charged"),fields:[{text:p("charged.dmg"),formulaText:function(t){return Object(d.jsxs)("span",{children:[a.charged.dmg[t.tlvl.auto],"% ",l.b.printStat(Object(r.c)("charged",t),t)]})},formula:e.charged.dmg,variant:function(t){return Object(r.d)("charged",t)}},{text:p("charged.stamina"),value:n}]}},u=function(t,e,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:20;return{text:t("auto.fields.charged"),fields:[].concat(Object(s.a)(a.charged.hitArr.map((function(t,a){return{text:p("normal.hit".concat(a+1)),formulaText:function(e){return Object(d.jsxs)("span",{children:[t[e.tlvl.auto],"% ",l.b.printStat(Object(r.c)("charged",e),e)]})},formula:e.charged[a],variant:function(t){return Object(r.d)("charged",t)}}}))),[{test:p("charged.stamina"),value:n}])}},b=function(t,e,a){return{text:t(n||(n=Object(c.a)(["auto.fields.plunging"]))),fields:[{text:p("plunging.dmg"),formulaText:function(t){return Object(d.jsxs)("span",{children:[a.plunging.dmg[t.tlvl.auto],"% ",l.b.printStat(Object(r.c)("plunging",t),t)]})},formula:e.plunging.dmg,variant:function(t){return Object(r.d)("plunging",t)}},{text:p("plunging.low"),formulaText:function(t){return Object(d.jsxs)("span",{children:[a.plunging.low[t.tlvl.auto],"% ",l.b.printStat(Object(r.c)("plunging",t),t)]})},formula:e.plunging.low,variant:function(t){return Object(r.d)("plunging",t)}},{text:p("plunging.high"),formulaText:function(t){return Object(d.jsxs)("span",{children:[a.plunging.high[t.tlvl.auto],"% ",l.b.printStat(Object(r.c)("plunging",t),t)]})},formula:e.plunging.high,variant:function(t){return Object(r.d)("plunging",t)}}]}},h=function(t,e,a){var n,i;return{text:t("auto.fields.charged"),fields:[{text:p("charged.spinning"),formulaText:function(t){return Object(d.jsxs)("span",{children:[a.charged.spinning[t.tlvl.auto],"% ",l.b.printStat(Object(r.c)("charged",t),t)]})},formula:e.charged.spinning,variant:function(t){return Object(r.d)("charged",t)}},{text:p("charged.final"),formulaText:function(t){return Object(d.jsxs)("span",{children:[a.charged.final[t.tlvl.auto],"% ",l.b.printStat(Object(r.c)("charged",t),t)]})},formula:e.charged.final,variant:function(t){return Object(r.d)("charged",t)}},{text:p("charged.stamina"),value:null!==(n=a.charged.stam)&&void 0!==n?n:"40/s"},{text:p("maxDuration"),value:null!==(i=a.charged.maxDuration)&&void 0!==i?i:"5s"}]}},_=function(t,e,a,n){return{text:t("auto.fields.charged"),fields:[{text:p("charged.aimed"),formulaText:function(t){return Object(d.jsxs)("span",{children:[a.charged.hit[t.tlvl.auto],"% ",l.b.printStat(Object(r.c)("charged",t),t)]})},formula:e.charged.hit,variant:function(t){return Object(r.d)("charged",t)}},{text:p("charged.fullyAimed"),formulaText:function(t){return Object(d.jsxs)("span",{children:[a.charged.full[t.tlvl.auto],"% ",l.b.printStat(Object(r.c)("charged",t,n),t)]})},formula:e.charged.full,variant:function(t){return Object(r.d)("charged",t,n)}}]}},y=function(t,e,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;return Object(i.a)({name:e("".concat(t,".name")),img:a,sections:[{text:e("".concat(t,".description"))}]},n?{stats:n}:{})}},335:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a(112);function i(t){t.forEach((function(t){var e,a;"function"!==typeof t.canShow&&(t.canShow=function(){return!0}),null===(e=t.fields)||void 0===e||null===(a=e.forEach)||void 0===a||a.call(e,n.b)}))}},357:function(t,e,a){"use strict";var n=a(275),i={regen:function(t){return Object(n.b)(30,"finalHP")}};e.a=i},358:function(t,e,a){"use strict";var n={s4:function(t){return[function(t){return.25*Math.min(t.enerRech_,300)},["enerRech_"]]}};e.a=n},359:function(t,e,a){"use strict";var n=a(275),i={regen:function(t){return Object(n.b)(30,"finalHP")}};e.a=i}}]);
//# sourceMappingURL=28.b28ab4ad.chunk.js.map