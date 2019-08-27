/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import Auth from "./script/scene/Auth"
import BoardRuntime from "./script/runtime/BoardRuntime"
import CircleSpriteRuntime from "./script/runtime/CircleSpriteRuntime"
import ScoreRuntime from "./script/runtime/ScoreRuntime"
import GameBoxRuntime from "./script/runtime/GameBoxRuntime"
import PlayerRuntime from "./script/runtime/PlayerRuntime"
import Game from "./script/scene/Game"
import Main from "./script/scene/Main"
import Room from "./script/scene/Room"
import DialogRuntime from "./script/runtime/DialogRuntime"
/*
* 游戏初始化配置;
*/
export default class GameConfig{
    static width:number=640;
    static height:number=1136;
    static scaleMode:string="fixedwidth";
    static screenMode:string="none";
    static alignV:string="top";
    static alignH:string="left";
    static startScene:any="Main.scene";
    static sceneRoot:string="";
    static debug:boolean=false;
    static stat:boolean=false;
    static physicsDebug:boolean=false;
    static exportSceneToJson:boolean=true;
    constructor(){}
    static init(){
        var reg: Function = Laya.ClassUtils.regClass;
        reg("script/scene/Auth.ts",Auth);
        reg("script/runtime/BoardRuntime.ts",BoardRuntime);
        reg("script/runtime/CircleSpriteRuntime.ts",CircleSpriteRuntime);
        reg("script/runtime/ScoreRuntime.ts",ScoreRuntime);
        reg("script/runtime/GameBoxRuntime.ts",GameBoxRuntime);
        reg("script/runtime/PlayerRuntime.ts",PlayerRuntime);
        reg("script/scene/Game.ts",Game);
        reg("script/scene/Main.ts",Main);
        reg("script/scene/Room.ts",Room);
        reg("script/runtime/DialogRuntime.ts",DialogRuntime);
    }
}
GameConfig.init();