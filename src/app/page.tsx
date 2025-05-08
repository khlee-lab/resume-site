import Image from "next/image";

export default function ResumePage() {
  return (
    <div className="container mx-auto p-8 font-sans text-gray-800">
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-3 text-center">
          履歴書 / Curriculum Vitae
        </h1>
        <p className="text-2xl font-semibold text-center mb-6">
          Kyunghyun LEE（イ・キョンヒョン）
        </p>
        <div className="max-w-lg mx-auto bg-gray-50 p-4 rounded-lg shadow">
          <table className="w-full text-sm">
            <tbody>
              <tr>
                <td className="font-semibold pr-2 py-1 align-top">メール:</td>
                <td className="py-1">
                  <a
                    href="mailto:kyunghyunlee@microsoft.com"
                    className="text-blue-600 hover:underline"
                  >
                    kyunghyunlee@microsoft.com
                  </a>{" "}
                  /
                  <a
                    href="mailto:kh3111.lee@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    kh3111.lee@gmail.com
                  </a>
                </td>
              </tr>
              <tr>
                <td className="font-semibold pr-2 py-1 align-top">携帯:</td>
                <td className="py-1">+81-(0)70-4088-2387</td>
              </tr>
              <tr>
                <td className="font-semibold pr-2 py-1 align-top">居住地:</td>
                <td className="py-1">東京都</td>
              </tr>
            </tbody>
          </table>
        </div>
      </header>

      <hr className="my-8 border-gray-300" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">
          1. 職務経歴概要
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border-b border-gray-200 text-left">期間</th>
                <th className="p-2 border-b border-gray-200 text-left">会社・部署</th>
                <th className="p-2 border-b border-gray-200 text-left">役職</th>
                <th className="p-2 border-b border-gray-200 text-left">主な担当領域</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b border-gray-200">2022/07 – 現職</td>
                <td className="p-2 border-b border-gray-200">
                  <strong>日本マイクロソフト</strong> Customer Success Unit
                </td>
                <td className="p-2 border-b border-gray-200">
                  Customer Success Account Manager (CSAM)
                </td>
                <td className="p-2 border-b border-gray-200">
                  自動車業界向け Customer Success／DX・AI 推進
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-gray-200">2016/05 – 2022/06</td>
                <td className="p-2 border-b border-gray-200">
                  <strong>IBM Japan</strong> IoT Strategy / Cognitive R&D
                </td>
                <td className="p-2 border-b border-gray-200">シニアコンサルタント</td>
                <td className="p-2 border-b border-gray-200">
                  自動運転ソフトウェア開発プロセス・PoC
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-gray-200">2015/12 – 2017/03</td>
                <td className="p-2 border-b border-gray-200">
                  <strong>Resonic Japan</strong>
                </td>
                <td className="p-2 border-b border-gray-200">チーフ & セールスエンジニア</td>
                <td className="p-2 border-b border-gray-200">
                  計測機器スタートアップの市場開拓
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-gray-200">2012/07 – 2015/11</td>
                <td className="p-2 border-b border-gray-200">
                  <strong>Samsung Electro-Mechanics</strong> OMS 事業部
                </td>
                <td className="p-2 border-b border-gray-200">先任研究員</td>
                <td className="p-2 border-b border-gray-200">
                  スマホカメラ／HDD 流体軸受の量産立ち上げ
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-8 border-gray-300" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">
          2. 日本マイクロソフト – Customer Success Account Manager (CSAM)
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          <em>在籍期間 2022/07 – 現在｜Customer Success Unit / Automotive Delivery Division</em>
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">2.1 担当顧客・プロジェクト</h3>
        <ul className="list-disc list-inside ml-4 space-y-1 text-sm text-gray-700">
          <li>
            <strong>Mitsubishi Motors, Nissan Group</strong>（Forbes Global 500） –
            自動車 OEM
          </li>
          <li>
            <strong>Renesas Electronics</strong>（Forbes Global 1000） – 車載・パワー半導体メーカー
          </li>
          <li>
            <strong>NHK Spring</strong> – 車載サスペンション・シートスプリング世界トップシェア
          </li>
          <li>担当ユーザー数 ≈ 60,000</li>
          <li>Customer Success 関連契約規模：1.4 億円（前年比 +40%）</li>
          <li>旧担当 Honda Motor／Pioneer</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">2.2 業務内容・主要実績</h3>
        <ul className="list-disc list-inside ml-4 space-y-1 text-sm text-gray-700">
          <li>
            Microsoft Unified 契約を基盤とした Customer Success 活動・技術支援
          </li>
          <li>IT 戦略／DX・AI トランスフォーメーション推進</li>
          <li>月 3–5 回の定例会議、四半期／年 1–2 回の CIO 報告を実施</li>
          <li>AE・製品営業・エンジニアと連携したクロスファンクショナル戦略実行</li>
          <li>年間 2,000 件超の SR を統括、重大障害は IM・PG と協働で解決</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">2.3 主要成果</h3>
        <div className="space-y-3 text-sm">
          <div className="p-3 bg-gray-50 rounded-md shadow-sm">
            <h4 className="font-semibold text-gray-700">
              Renesas Electronics – Copilot 3,500 Seat 展開に成功し、10K Upsellの機会創出
            </h4>
            <p className="mt-1">
              <strong className="text-gray-600">課題:</strong> Copilot利用時のセキュリティ関連の懸念、5 か月以内に展開・定着及び高いMAUの維持が必要、利用者の 50% 以上が海外拠点でありデリバリに課題あり。また社内的には、Upsellの機会の創出が必要
            </p>
            <p className="mt-1">
              <strong className="text-gray-600">アクション:</strong>
            </p>
            <ul className="list-disc list-inside ml-5 text-gray-600">
              <li>
                技術支援のための社内ファンドを申請し獲得し、グローバルでバイリンガルのエンジニアを確保
              </li>
              <li>
                定着のため、MAUデータを週次に共有しエンジニアとの施策について協議し、全社向けのWorkshop実施
              </li>
              <li>
                セキュリティに関しては、社内でエスカレーションを実施しお客様の懸念点について回答、懸念点
              </li>
              <li>
                社内で成果共有の WS を実施し、お客様とAE、製品営業との交流の場を提供
              </li>
            </ul>
            <p className="mt-1">
              <strong className="text-gray-600">成果:</strong>
            </p>
            <ul className="list-disc list-inside ml-5 text-gray-600">
              <li>
                <strong>MAU 97.5%</strong> を達成、10 k 席 Upsell パイプラインを形成
              </li>
              <li>
                <strong>Microsoft Global Customer Success Spotlight</strong> – Copilot 導入事例として紹介（2024/11）
              </li>
            </ul>
          </div>
          <div className="p-3 bg-gray-50 rounded-md shadow-sm">
            <h4 className="font-semibold text-gray-700">
              Mitsubishi Motors – Azure OpenAI 採用 / Copilot 導入
            </h4>
            <p className="mt-1">
              <strong className="text-gray-600">課題:</strong> 社内は AI への懐疑的な風潮が強く、メインクラウドは GCP のみで Azure は未利用。PoC 予算・リソースの制約と参加メンバーのスキルギャップが存在。
            </p>
            <p className="mt-1">
              <strong className="text-gray-600">アクション:</strong>
            </p>
            <ul className="list-disc list-inside ml-5 text-gray-600">
              <li>
                全社向け AI 勉強会を開催し、RAG など具体的ニーズを発掘し Microsoft のプレゼンスを向上。
              </li>
              <li>
                Executive Review を開催し、経営層の要求を整理 ⇒ AE・エンジニアを巻き込んで提案を実施。
              </li>
              <li>AOAIを用いた RAGの内製化を立ち上げについて 3 週間でPoC を実施。</li>
              <li>
                お客様のスキルギャップについて、CSAMから伴走支援を行い、PoCを無事完了。
              </li>
            </ul>
            <p className="mt-1">
              <strong className="text-gray-600">成果:</strong>
            </p>
            <ul className="list-disc list-inside ml-5 text-gray-600">
              <li>
                Azure OpenAI 採用決定、初年度 Azure Revenue <strong>+¥0.1M/月</strong>
              </li>
              <li>GitHub Copilot & Enhanced Solution 商談を創出</li>
              <li>Copilot 300 Seat 導入</li>
            </ul>
          </div>
          <div className="p-3 bg-gray-50 rounded-md shadow-sm">
            <h4 className="font-semibold text-gray-700">
              日本発条 (NHK Spring) – セキュリティ製品の移行ブロッカー解消
            </h4>
            <p className="mt-1">
              <strong className="text-gray-600">課題・チャレンジ:</strong>
            </p>
            <ul className="list-disc list-inside ml-5 text-gray-600">
              <li>
                セキュリティ製品の移行プロジェクトにおいて、3rd party製のアンインストール後も残存する問題を解決し、追加ライセンスのUpsellの機会損失を防ぐとともに、お客様との信頼関係を構築。今後、さらなる Upsellも検討中
              </li>
              <li>
                3rd partyツールの影響により社内のエンジニアでも対応できず、問題解決が停滞していたため、Microsoft Unifiedの対応に対する信頼も失いつつあった。
              </li>
              <li>
                製品担当者より、「他社では類似のケースで断念することも多い中、ここまで対応してもらえて助かった」とのお言葉をいただいた。
              </li>
            </ul>
            <p className="mt-1">
              <strong className="text-gray-600">アクション:</strong>
            </p>
            <ul className="list-disc list-inside ml-5 text-gray-600">
              <li>
                問題解決へのコミットとオンサイトでの例外対応を実施：CSSやベンダーでも解決できなかった部分について、自ら問題解決にコミットし、オンサイトで例外対応を行うことで最終的に問題を解消
              </li>
              <li>
                ステークホルダーの関係回復: お客様の主要ステークホルダーに対し報告会を実施し、計画や要望をヒアリング。現場メンバーとは週次で進捗と課題を共有・解決する体制を構築し、信頼関係の回復
              </li>
            </ul>
          </div>
          <div className="p-3 bg-gray-50 rounded-md shadow-sm">
            <h4 className="font-semibold text-gray-700">
              Renesas Electronics – Unified 契約増額更新
            </h4>
            <p className="mt-1">
              <strong className="text-gray-600">課題:</strong>
            </p>
            <ul className="list-disc list-inside ml-5 text-gray-600">
              <li>
                更新 3 週間前に CIO から提示された大幅減額要求により、Unifiedの更新に向けた交渉が一時停止。
              </li>
              <li>
                Unified の価格に対して、経営層から強い疑問や懸念の声があった。
              </li>
            </ul>
            <p className="mt-1">
              <strong className="text-gray-600">アクション:</strong>
            </p>
            <ul className="list-disc list-inside ml-5 text-gray-600">
              <li>
                問題の巻き取りとCIOとの迅速なコミュニケーションの開始:
                <ul className="list-circle list-inside ml-6">
                  <li>過去に CIO との面談を通じて Unified の価値を訴求していた経緯を踏まえ、CSAM 主導で契約交渉を巻き取り。</li>
                  <li>CIO へ即時連絡し、Unified の成果を共有するとともに、懸念点のヒアリングも実施。いただいた内容については、レポート作成に合意。</li>
                </ul>
              </li>
              <li>
                データドリブンな価値訴求と価格の妥当性について分析:
                <ul className="list-circle list-inside ml-6">
                  <li>過去 12 か月の SR を解析し、代替サポートを利用する際の追加コストとサービス品質の低下について可視化。「投資 &lt; 回避コスト」を具体的数値で証明。</li>
                  <li>Unified の価格については、ライセンス増加に基づくことを説明し、最終的に価格の正当性についてご理解を得る。</li>
                </ul>
              </li>
            </ul>
            <p className="mt-1">
              <strong className="text-gray-600">成果:</strong> 年間 1.4 億円（前年比 +40%）でクロージング
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-4 mb-2">2.4 受賞・表彰</h3>
        <ul className="list-disc list-inside ml-4 space-y-1 text-sm text-gray-700">
          <li>
            <strong>Global Customer Success Spotlight</strong> – Copilot 導入事例（2024/11）
          </li>
        </ul>
      </section>

      <hr className="my-8 border-gray-300" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">
          3. 過去の主要プロジェクト
        </h2>
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">
              3.1 IBM Japan（2016–2022）
            </h3>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-gray-600">
              <li>
                燃料電池外販ビジネスロードマップ策定 – 組織・機能要件定義／施策ロードマップ作成
              </li>
              <li>
                自動運転テストケース削減 PoC – Python でアルゴリズム実装、テスト数を 1/1000 へ削減
              </li>
              <li>
                車載 SW 開発プロセス最適化 – Automotive SPICE 準拠プロセス設計／ツールチェーン定義
              </li>
              <li>OTA PoC（OpenShift） – Carmaker で組合せ検証フロー構築</li>
              <li>
                自動運転 L3 アーキテクチャ再構築 – 設計ドキュメント体系化・品質解析ツール実装
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">
              3.2 Resonic Japan（2015–2017）
            </h3>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-gray-600">
              <li>B2B セールス戦略で計測サービス売上を前年比 5 倍に拡大</li>
              <li>モジュール設計導入で製作コスト 70% 削減</li>
              <li>大学との共同研究プロジェクトをリード</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">
              3.3 Samsung Electro-Mechanics（2012–2015）
            </h3>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-gray-600">
              <li>中国工場量産立ち上げ・不良率 30,000 ppm → 1,000 ppm 以下</li>
              <li>新規サプライヤー開拓と Value Engineering でコスト削減</li>
              <li>カメラ／HDD 流体軸受で特許 2 件出願</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="my-8 border-gray-300" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">
          4. 学歴
        </h2>
        <div className="overflow-x-auto mb-3">
          <table className="min-w-full text-sm border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border-b border-gray-200 text-left">期間</th>
                <th className="p-2 border-b border-gray-200 text-left">学位・専攻</th>
                <th className="p-2 border-b border-gray-200 text-left">学校</th>
                <th className="p-2 border-b border-gray-200 text-left">所在地</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b border-gray-200">2010/04 – 2012/03</td>
                <td className="p-2 border-b border-gray-200">修士（機械宇宙システム）</td>
                <td className="p-2 border-b border-gray-200">東京工業大学 理工学研究科</td>
                <td className="p-2 border-b border-gray-200">東京</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-gray-200">2006/04 – 2010/03</td>
                <td className="p-2 border-b border-gray-200">学士（機械宇宙）</td>
                <td className="p-2 border-b border-gray-200">東京工業大学</td>
                <td className="p-2 border-b border-gray-200">東京</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-md font-semibold text-gray-700 mt-2">主要論文</h3>
        <ul className="list-disc list-inside ml-4 text-sm space-y-1 text-gray-600">
          <li>
            Fundamental study on vibration monitoring system for wind turbine blades.
          </li>
          <li>Gas flow characteristic in Nano-channel.</li>
        </ul>
      </section>

      <hr className="my-8 border-gray-300" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">
          5. 研究・出版
        </h2>
        <ul className="list-disc list-inside ml-4 text-sm space-y-1 text-gray-700">
          <li>
            Lee, K. et al., &quot;Feasibility study on a strain-based deflection monitoring system for wind turbine blades,&quot;{" "}
            <em>Mechanical Systems & Signal Processing</em>, 2017.
          </li>
        </ul>
      </section>

      <hr className="my-8 border-gray-300" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">
          6. スキル
        </h2>
        <ul className="list-disc list-inside ml-4 text-sm space-y-1 text-gray-700">
          <li>
            <strong>技術:</strong> Python／MATLAB／Node.js／GitHub／Azure /OpenAI／AWS Cloud
          </li>
          <li>
            <strong>言語:</strong> 韓国語（母語）、日本語（ビジネス上級・JLPT N1）、英語（ビジネス中級・TOEIC 920）
          </li>
          <li>
            <strong>関心:</strong> クラウド技術、ML／AI／Data Analytics、自動運転
          </li>
        </ul>
      </section>

      <hr className="my-8 border-gray-300" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">
          7. その他
        </h2>
        <ul className="list-disc list-inside ml-4 text-sm space-y-1 text-gray-700">
          <li>
            IBM Japan – <strong>シニアコンサルタント</strong> 昇格（2019）
          </li>
          <li>
            Samsung Electro-Mechanics – <strong>先任研究員</strong> 昇格（2015）
          </li>
        </ul>
      </section>

      <footer className="mt-10 pt-6 border-t border-gray-300 text-center">
        <p className="text-sm text-gray-600">
          詳細ポートフォリオは{" "}
          <a
            href="https://kyunghyunlee.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://kyunghyunlee.com
          </a>{" "}
          を参照
        </p>
      </footer>
    </div>
  );
}
