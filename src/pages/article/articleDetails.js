import { ScrollView, View } from "@tarojs/components";
import Taro, { Component } from '@tarojs/taro';
import './articleDetails.less';
import CIcon from "../../components/cIcon/cIcon";
import TitleBar from "../../components/titleBar/titleBar";

export default class ArticleDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            basicArticleInfo: null,
            articleInfo: {
                author: 'Matthew Wang',
                createTime: '2019-11-20',
                content: '我和他总是在学校的食堂里相遇。每次遇见他，我总是拉着自己的饭友跑到一个偏僻的角落里就餐。\n' +
                    '\n' +
                    '我不想让他看到我吃饭时的样子。可他还是看到了，而且还看得特别认真。\n' +
                    '\n' +
                    '余生，我们一起吃饭\n' +
                    '\n' +
                    '放月假后，我和小伙伴在校门前的小餐馆门外吃米线。米线刚上来，我一歪头，便看到了他。他穿着一身黑色的运动服，在公交站牌处等车。我赶紧埋下头，噘着小嘴用力地吹着筷子夹起来的米线。可事总与愿违，我感觉这是我这辈子吃过的最烫的米线了。\n' +
                    '\n' +
                    '我平时吃饭要比常人慢些，这次我的小伙伴等得有点儿小着急。我拿纸巾擦了擦鼻尖上的汗珠，小心地对小伙伴说我吃完了。\n' +
                    '\n' +
                    '公交站牌离小餐馆不远，我眼睛的余光似乎时刻能感受到他的注视。好尴尬啊！世界这么大，我想捕捉他的身影时，总是找不到他的脸。可我不想被他撞见时，偏偏又找不到理由逃脱。\n' +
                    '\n' +
                    '转眼间，相识已十年。真的好奇怪，我俩竟然都不记得第一次一起吃饭具体吃了什么。但他说他依稀记得他第一次见我吃饭时的情景，他说那是他第一次见吃碗米线能吃那么久的人。\n' +
                    '\n' +
                    '他从老家跑到市区陪我过生日。我偷偷从家里溜出来，问他中午打算吃什么，他说不知道。我们边走边看，随意进了一家冷清的餐馆，点了一个红烧鱼块，一个香菇炒油菜。结果，红烧鱼块很难吃，香菇炒油菜也好不到哪里去。事后，我给小伙伴吐槽。小伙伴说我好傻，两个人去吃小火锅岂不是更好些？\n' +
                    '\n' +
                    '我和他没吃过什么有特色的小火锅。反倒有一次特别狼狈，外面下着大雨，火锅店里下着小雨。店家用脸盆接着雨水，滴答滴答地，在我的眼前。他时不时地扭头看看脸盆里的水，嘴里还念叨着：这雨一会儿就停。那个时候，我特别希望他不要坐我对面，坐我身边多好。这样，他既看不到我吃饭时的样子，还能和我一起赏雨。\n' +
                    '\n' +
                    '我吃饭比较挑。我不挑味道，一道素菜，甚至不放油，不放盐，清水煮一下，我都能咽下去。但是我受不了菜太咸，或者菜没择干净，比如青菜泛黄的部分，土豆发芽的部分，白菜开花的部分。要是喝个小米粥，我会把颜色发黑的小米粒挨个挑在我的碗沿边上。我自己也着实觉得这个毛病不好，碗沿边上一般被我挑出四五个黑米粒来，我便自觉地拿卫生纸抹掉这些黑米粒。\n' +
                    '\n' +
                    '可能年岁不够老，可能没去过比较高级的餐厅，目前为止，我脑海里没有一家可以让自己成为常客的餐厅。第一次去一家餐厅，觉得这道菜不错，等下次兴致勃勃为这道菜而来时，发觉已不是上次来时的那个味道。\n' +
                    '\n' +
                    '我不吃西餐，确切地说，是我不吃牛排。和他吃了一次牛排后，我痛苦了一周。我这个每隔2个小时就要进食一次的人的肠胃竟然消化不了那个东西。\n' +
                    '\n' +
                    '他带着我去那家好多人给他推荐过的烤肉店。我问他吃过没。他说没有，一直想等着和我一起尝试下。我对烤肉没有特别的喜爱，第一次去那家烤肉店，需要排队。我才没有耐心等别人吃完了腾地方。我拉着他就走，他说你看别人都在排队等着，要不咱也等会儿吧？\n' +
                    '\n' +
                    '改天你闲了，自己来吃吧。我又不是非要吃烤肉，我只是饿了，想吃饭。我淡淡地回他。\n' +
                    '\n' +
                    '他一脸不开心：我自己哪里这么馋，这么喜欢吃烤肉了？只是想和你一起尝试啊。\n' +
                    '\n' +
                    '我不松口，他说那明天咱俩早点儿来，今天去吃炒鸡吧。\n' +
                    '\n' +
                    '结果第二天下雨了。但我不想再扫他的兴致。担心排队问题，我俩反而来早了，又在等店家开门。或许真是别致的烤肉店吧，在雨里撑伞等着的人，不只我们两个。店家开门后，还一直在收拾杂活，等了好久好久，才开吃。\n' +
                    '\n' +
                    '这家烤肉店的餐具是老式的茶缸，满墙都贴着旧报纸。等我吃上第一口烤肉后，他小心地问我味道如何。我笑着反问他：你说呢？他偷偷地笑了：也就那样呗。\n' +
                    '\n' +
                    '我安慰他：吃什么不重要，好不好吃也不重要，重要的是和谁一起吃。\n' +
                    '\n' +
                    '饭后，我们撑着伞在湖边走了好久。\n' +
                    '\n' +
                    '也不知道他是怎么忍受我这个人的。似乎每次吃饭，我总能找出毛病来。不是环境不好，就是餐具不干净，不是饭菜不行，就是服务差劲。可能我俩更适合在家里自己做饭吃吧。可自从他在我家做了一次豆角炒肉片后，再不敢进我家厨房了。\n' +
                    '\n' +
                    '其实我感觉炒得还可以，只是酱油放多了，菜相难看而已。但他感觉我爸妈会嫌弃，反倒直接不动手做菜了。\n' +
                    '\n' +
                    '和他在一起，吃得最多的算是火锅吧，只是底料和做法不同，鱼，虾，羊肉，或烤或闷或煮。\n' +
                    '\n' +
                    '一个哥哥说爱情可以折现。我有些纳闷。哥哥解释道：和自己爱的人在一起，吃碗凉皮都幸福，你根本不会考虑这顿饭能花对方多少钱。\n' +
                    '\n' +
                    '好像也挺对啊。\n' +
                    '\n' +
                    '只愿余生，我都能和他一起吃饭。且穷，且快乐。'
            }
        }
    }

    componentWillMount() {
        const params = this.$router.params
        this.setState({
            basicArticleInfo: params
        })
    }

    render() {
        const { title, cover } = this.state.basicArticleInfo || {}
        const article = this.state.articleInfo || {}

        return <View className='article-details-page'>
            <ScrollView scrollY className='main-content'>
                <TitleBar isBack />
                <View className='article-cover' style={{ backgroundImage: 'url("' + cover + '")' }}>
                    <View className='cover-info'>
                        <View className='cover-title'>{title}</View>
                        <View className='cover-info-details'>
                            <View className='cover-author'>
                                <CIcon icon='account' />{article.author}
                            </View>
                            <View className='cover-time'>
                                <CIcon icon='clock' />{article.createTime}
                            </View>
                        </View>
                        <View className='cover-description'>{article.content.substring(0, 120)}...</View>
                        <View className='cover-read-more'><CIcon icon='shanghua' /></View>
                    </View>
                </View>
            </ScrollView>
        </View>
    }

}
