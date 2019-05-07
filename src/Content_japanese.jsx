import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Content from './Content.jsx';
import './Content-japanese.css';






class Content_Japanese extends Component {
  constructor(props) {
    super(props)


    this.state = {
    }
  }



  render() {
    return (
      <div className="content_japanese">
        <h3>VISION for LIFE</h3>
        <h4>1.人生のVISIONを設定する</h4>
        <p className="content">企業の多くはVISIONを掲げており、そのVISIONを達成するために日々の業務に取り組んでいる。この本はVISIONとは何かということを改めてしっかりと認識したうえで、その概念を個人単位まで落とし込み、人生のためのVISIONというものを設定することを目的とする。今何をすべきかどうかわからなかったり、人生の方向性を見失いそうな人の手助けになればいいと思う。</p>
        <p className="content">この本を執筆しようと考えたのはTwitter, Instagramを始め周りには何か素晴らしいことを成し遂げている人たちだらけに感じ、自分も何かを成し遂げないといけないという焦りを感じることがあったからである。これは多くの人にも共通している悩みなのではないだろうか。人のプロフィールや実績を見ると自分にはないような輝かしいものばかりがならんでおり、それに対し自分はこのままでいいのかという思いが常にあるという状況であった。しかし、マーケティングの勉強の一環で企業のVISIONについて知っていくうちにこの状況を打開することができるのがVISION for LIFEの考え方ではないかと考えた。</p>
        <p className="content">この本を通して人生の軸となるVISIONを発見し、今やるべきことを明確にした上で自分らしさというものを見つけてほしい。企業が数値の面で他者と比較することはあれど独自の道を進みVISIONの実現に突き進むように、個々人が自らのVISIONの実現に突き進むことができるようになれば良いと思う。</p>

        <h4>2.VISIONとは何か</h4>
        <p className="content">VISIONという言葉がそもそも何を示しているのかどうかから考えてみる。VISIONはMISSIONやCONCEPTのようなビジネスの場で用いられてはいるが、曖昧な言葉であり、よく意味を理解しないまま用いている言葉の１つである。VISIONはvi-と-sionに分けることができる。 vi-はラテン語のvidereという言葉から来ており、これは「見る」という意味を含んでいる。visibleなどで用いられているものと同じである。そして-sionは~ものという意味であるためVISIONは「見ることのできるもの」と捉えるのが定義的に考えた時の意味になる。つまりVISIONとは何かを考えた時に、少なくともそれは視覚的情報を含有するものである必要があると言える。</p>
        <p className="content">このことを踏まえると、VISIONとは目指したい世界を視覚情報的に文字に書き起こしたものと言える。「素晴らしい世界を作る」のように素晴らしいという概念的なものではなく、amazonの「The everything store(全てを売る店)」のように見たことはないが(今はかなり成し遂げている)頭の中で様々なものが売っているお店が見えてくるようなものがVISIONである。</p>
        <p className="content">よくある勘違いがVISIONを「今月の目標売上は1億円だ！」のように数値を用いて考えるとである。数値を用いたものはVISIONではなく目標であり、性質が大きく異なるのである。数値目標というのは、人が動くモチベーションとしては弱いものもあり、VISIONと目標の使い方を間違えると全く違った効果をもたらしてしまうので注意が必要である。</p>
        <p className="content">またVISIONとは公的な視点を持つものである。つまり、VISIONは自分の欲望のためにどのような世界であるとよいかではなく、多くの人にとってどのような世界であるかを考えなければならないものである。VISIONは共感を得ることで、多くの人に共有されていき人を巻き込みながら力を得ていくものであるためこのような条件が必要なのである。</p>
        <p className="content">ここでこれまでに紹介したVISIONの意味を持つ、優れた例を紹介したい。それはあの有名なMartin Luther King Jr.のスピーチ(1963)である。特に人々にVISIONを与えたのは” I have a dream that one day on the red hills of Georgia the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood.”という部分であると思える。日本語では「私には夢があります。いつの日か、ジョージアの赤茶けた丘の上で、昔は奴隷だった人々の子孫と、昔は奴隷の所有者だった人々の子孫が、同胞のテーブルに一緒に座ることができるようになるという夢です。」上下関係のあった当時の人からしたら現実とは程遠いかもしれないこの文章でも、人はあたかも視覚情報かのようにこの文章を受け入れたことであろう。そしてこの光景に共感をしたら、人々はVISIONに突き動かされたということになるのだ。まるで目の前にその光景があるかのような文章と、実現したい世界であると思えるような内容であるこの一文は多くの人を巻き込み、巨大なパワーを生み歴史に刻まれたものだと考える。</p>

        <h4>3.VISIONを持つとは</h4>
        <p className="content">人生を旅と例えるとするならば、VISIONを持つとはコンパスを持つことである。コンパスを持つことによって目の前が見えなくても進む方向がわかるように、VISIONがあることで自分が今どの方向に進むべきで、何をすべきかということがわかってくる。他人と違う方向に進んでいても、自分のゴールがコンパスの方向にあると思えば自信を持って突き進むことができる。</p>
        <p className="content">特に昨今はテクノロジーの成長も早く、世界の流れが早い。iPhoneやfacebookなどの浸透の速さを見れば一目瞭然であるが、社会の状況がコロコロ変わっていき、また新しいものもどんどん出てくる。目の前に出てきたもの全てを追っていては、追いつけなくなるくらい流れが早い。このような状況ではコンパスのように常に同じ方向をさすものが必要であり、それがVISIONの果たす役割でもある。</p>
        <p className="content">企業は利益のみを追求し始めたら方向性を見失い、必ず倒産する。企業の存在理由がVISIONの達成であるべきであるのだ。これは個人にも通用し、VISIONを持つことこそが存在理由にもなり得るのである。</p>
        <p>つまり個人でも自分が目指すべき世界像を持つことが、今何をすべきか、これから何をすべきかの行動指針として役立つものとなるのである。</p>

        <h4>4.My VISIONを探す</h4>
        <p className="content">VISIONとはストーリーの上に成り立つものであるものがほとんどである。宇宙について何も知らない人が急に、「私は宇宙業界を変えたい！宇宙に住める世界を！」といいだしたところで共感を得られることはないであろう。まずは自分を知ることである。メモの魔力という本が流行ったが、あの本の最後に存在する1000の質問などは自分を知るのに適している。そして自分を知り、モチベーションを感じる、世界を変えたいと考えられる領域を探すことが次に必要となってくる。自分の人生でこの点が不満であった、この点ならもっと良くなると感じる部分が見えてくるのである。</p>
        <p className="content">VISIONに昇華させるためにはその目指す世界を一言で説明し、視覚化する必要があるのである。そしてその際に、常になぜその世界を目指すのか”WHY?”の質問をし続け流ことが大切である。WHYフィルターをかけてVISIONをろ過していくのである。なぜこの世界を成し遂げたいのか？なぜこのVISIONである必要があるのか？なぜ私がこの世界を作り上げようとするのかなどなど。。。</p>


        <h4>5.VISION-Mission</h4>
        <p className="content">VISIONとMIssionには深い関係性がある。VISIONは長期的にみて作り上げたい世界像である必要があるのに対し、MIssionは今現在そのために何をすべきかというものである。MIssionは使命として訳され、果たすべきことである。Missionがあるからこそ企業は存在する必要があるのである。VISIONに繋がるMissionがわかれば今何をすればいいのかを理解することができたということである。</p>
        <p className="content">amazonのVISIONは現在は“to be Earth’s most customer-centric company, where customers can find and discover anything they might want to buy online.”(地球上で最も顧客のことを考えた企業であり、顧客がオンライン上で全てのものを見つけて買うことができる場所であること)となっている。そしてこのVISIONに対して掲げているMissionが“We strive to offer our customers the lowest possible prices, the best available selection, and the utmost convenience.” (できる限り安い価格で、最もいい選択を、そして最も便利なものと提供するために努力する)というものを掲げている。AmazonがこのMissionを意識して行動を進めていくが、このMissionの先にVISIONがあるというのがVISION-Missionの良い関係性である。</p>
        <p className="content"> 個人単位での自分のMissionは何であろうか？自分のVISIONが見つかったのであればその世界を達成するために今何をすべきかどうか、何の使命が自分にあるかも次第にわかってくる。それこそが今最も自分がやるべきものであるのであろう。</p>

        <h4>6.人生のVISIONを設定しよう</h4>
        
        <p className="content">ここまでの話を踏まえて自分の人生のVISIONを設定して欲しい。自分は今何をすべきかを見失っていたが、VISION for LIFEの考えを見つけることで今何をすべきかを発見することができたように思える。周りの状況が目まぐるしく変わるこの状況で方向を見失わないためのコンパスを持てると良い。</p>

        <p>参照：『THE VISION』江上隆夫</p>
      </div>
    );

  
  
}


 

}

export default Content_Japanese;