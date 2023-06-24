<script setup>
defineProps(['el'])
import * as PIXI from 'pixi.js'

const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    background: 0xffffff,
    resolution: window.devicePixelRatio || 1,
    antialias: true
})
el.appendChild(app.view)
const container = new PIXI.Container()
app.stage.addChild(container)
const baseTexture = PIXI.BaseTexture.from('/textures/dino.png')
const dinoTexture = new PIXI.Texture(
    baseTexture,
    new PIXI.Rectangle(848, 2, 44, 47)
)
const dino = new PIXI.Sprite(dinoTexture)
dino.visible = false
container.addChild(dino)

const runTextures = []

for (let i = 0; i < 2; i++) {
    runTextures.push(
        new PIXI.Texture(
            baseTexture,
            new PIXI.Rectangle(936 + i * 44, 0, 44, 47)
        )
    )
}
const runAnimation = new PIXI.AnimatedSprite(runTextures)
runAnimation.animationSpeed = 0.1
runAnimation.play()
// runAnimation.visible = false
runAnimation.x = 60
runAnimation.y = window.innerHeight - 50 - 40
container.addChild(runAnimation)

const jumpTexture = new PIXI.Texture(
    baseTexture,
    new PIXI.Rectangle(848, 2, 44, 47)
)
const jumpSprite = new PIXI.Sprite(jumpTexture)
jumpSprite.visible = false
container.addChild(jumpSprite)

const groundTexture = new PIXI.Texture(
    baseTexture,
    new PIXI.Rectangle(2, 56, 2200, 12)
)
const groundSprite = new PIXI.TilingSprite(groundTexture)
groundSprite.width = window.innerWidth
groundSprite.height = 12
groundSprite.position.set(0, window.innerHeight - 50)
container.addChild(groundSprite)

const cactusTexture = new PIXI.Texture(
    baseTexture,
    new PIXI.Rectangle(332, 2, 26, 50)
)
const cactusSprite = new PIXI.Sprite(cactusTexture)
cactusSprite.x = window.innerWidth / 2
cactusSprite.y = window.innerHeight - 50 - 40
container.addChild(cactusSprite)

let startText = new PIXI.Text("开始游戏", {
    fontFamily: 'Arial',
    fontSize: 36,
    fill: 0x333333,
    align: 'center'
})
startText.x = window.innerWidth / 2
startText.y = window.innerHeight / 2
startText.anchor.set(0.5)
container.addChild(startText)
startText.eventMode = 'static'
startText.on('click', () => {
    playGame()
})

let isGaming = false
let isGameover = false

function playGame() {
    isGaming = true
    console.log('start')
    startText.visible = false
    runAnimation.visible = true
    runAnimation.x = 60
    jumpSprite.x = 60
    runAnimation.y = window.innerHeight - 50 - 40
    jumpSprite.y = window.innerHeight - 50 - 40
}

function gameover() {
    console.log('end')
    isGaming = false
    isGameover = true
}

let score = 0
let jumpVelocity = 20
let gravity = 0.5
// let overTextIndex = null

app.ticker.add((delta) => {
    if (isGameover) {
        return
    }
    if (isGaming) {
        groundSprite.tilePosition.x -= 5 * delta
        cactusSprite.x -= 5 * delta
        if (cactusSprite.x < -30) {
            cactusSprite.x = window.innerWidth
            score++
        }
        if (jumpSprite.visible) {
            jumpVelocity -= gravity
            jumpSprite.y -= jumpVelocity * delta
            if (jumpSprite.y > window.innerHeight - 50 - 40) {
                jumpSprite.y = window.innerHeight - 50 - 40
                jumpVelocity = 20
                jumpSprite.visible = false
                runAnimation.visible = true
            }
        }
        if (
            jumpSprite.y > cactusSprite.y - 48 &&
            cactusSprite.x < jumpSprite.x + 40 &&
            cactusSprite.x > jumpSprite.x - 40
        ) {
            gameover()
            // if(overTextIndex!=null){
            //     container.removeChildAt(overTextIndex)
            // }
            let overText = new PIXI.Text('游戏结束，你的分数：' + score, {
                fontFamily: 'Arial',
                fontSize: 36,
                fill: 0x333333,
                align: 'center'
            })
            overText.x = window.innerWidth / 2
            overText.y = window.innerHeight / 2
            overText.anchor.set(0.5)
            container.addChild(overText)
            // overTextIndex = container.getChildIndex(overText)
            overText.eventMode='static'
            overText.on('click',()=>{
                location.reload()
            })
        }
    }
})

window.addEventListener('keydown', (e) => {
    if (isGaming && e.code === 'Space') {
        console.log('jump')
        runAnimation.visible = false
        jumpSprite.visible = true
    }
})
</script>

<template>
</template>

<style scoped></style>
