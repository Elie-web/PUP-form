import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import pupProfile from "@/assets/pup form profile.jpg";
import heroImg from "@/assets/hero.png";
import { Link } from "react-router-dom";
import { Leaf, Apple, Moon, Sparkles } from "lucide-react";

const APropos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="À propos PUP Form"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 text-center">
          <p className="text-white/60 text-sm font-medium uppercase tracking-widest mb-5">Notre histoire</p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-[0.95] mb-6 text-white">
            Emily & Antoine
          </h1>
          <p className="text-white/75 text-xl max-w-xl mx-auto">
            Coachs sportif et bien-être, parents avant tout.
          </p>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl bg-secondary border border-border p-10 flex flex-col justify-center gap-10" style={{ minHeight: "500px" }}>
              <p className="text-brand text-xs font-bold uppercase tracking-widest">PUP Form en chiffres</p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "12 ans", label: "d'expérience" },
                  { value: "30 000+", label: "séances de coaching" },
                  { value: "2 000+", label: "parents accompagnés" },
                  { value: "5.0 / 5", label: "note Google" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-heading text-3xl font-bold text-brand">{s.value}</p>
                    <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-brand text-sm font-medium uppercase tracking-widest mb-4">Pourquoi PUP Form</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">
                On est passés<br />par là aussi.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                On est parents d'une petite fille de 5 ans, débordante d'énergie, qui en demande toujours plus. Et parfois, on se sentait frustrés de ne pas pouvoir en faire plus pour elle.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Notre entourage pro et perso nous demandait d'être présents à 100 %, partout à la fois. On connaît cette sensation d'être à vide alors qu'on voudrait tellement donner plus.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-10">
                Après <strong>12 ans d'expérience professionnelle</strong> et <strong>5 ans de parentalité</strong>, on a choisi de transformer les parents et les couples trop fatigués grâce à des parcours ultra-personnalisés. Parce que profiter le mieux et le plus longtemps possible de ses proches, c'est la seule chose qui vaut VRAIMENT le coup.
              </p>
              <div className="flex flex-wrap gap-3">
                {["12 ans d'expérience", "5 ans de parentalité", "30 000+ séances", "2 000+ parents"].map((tag) => (
                  <span key={tag} className="bg-secondary text-foreground text-sm px-4 py-2 rounded-full border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Antoine */}
      <section className="py-32 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-brand text-sm font-medium uppercase tracking-widest mb-4">Le coach sportif & mental</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">Antoine</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Spécialisé en développement personnel et coaching identité, Antoine cumule 15 ans d'expérience et <strong>30 000 séances de coaching</strong> auprès de plus de 2 000 membres.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Sa spécialité : construire avec vous une <strong>routine hebdomadaire positive</strong> avec des outils novateurs pour optimiser votre temps. Faire juste l'activité physique qu'il faut. Vous rendre plus performant au quotidien sans vous épuiser.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Parce que vous êtes précieux(se), et que vos proches méritent la meilleure version de vous.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={pupProfile} alt="Antoine coach PUP Form" className="w-full h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Emily */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl bg-secondary p-10 flex flex-col justify-center gap-8" style={{ minHeight: "500px" }}>
              <div className="w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center">
                <Leaf className="w-7 h-7 text-brand" strokeWidth={1.5} />
              </div>
              <div className="space-y-5">
                {[
                  { icon: Apple, label: "Nutrition & alimentation", desc: "Plans sains, rapides et délicieux" },
                  { icon: Sparkles, label: "Soins corporels", desc: "Soins spécifiques pour la récupération" },
                  { icon: Moon, label: "Bien-être & récupération", desc: "Décompression et détente en profondeur" },
                  { icon: Leaf, label: "Routine bien-être", desc: "Approche douce et bienveillante" },
                ].map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg bg-background border border-border flex items-center justify-center shrink-0">
                        <ItemIcon className="w-4 h-4 text-brand" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{item.label}</p>
                        <p className="text-muted-foreground text-xs mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="text-brand text-sm font-medium uppercase tracking-widest mb-4">La spécialiste bien-être</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">Emily</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Co-fondatrice de PUP Form, Emily prend en charge la dimension bien-être, récupération et nutrition. Elle sait cuisiner <strong>sain ET bon dans un temps court</strong> — et elle vous apprendra à faire pareil.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Son accompagnement complète le travail d'Antoine pour une approche vraiment complète. Le repos et la récupération, c'est aussi de la performance.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Nutrition & bien-être", "Récupération", "Routine quotidienne", "Bien-être global"].map((tag) => (
                  <span key={tag} className="bg-secondary text-foreground text-sm px-4 py-2 rounded-full border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-32 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-brand text-sm font-medium uppercase tracking-widest mb-4">Ce qui nous guide</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">Ce en quoi on croit</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "La famille d'abord",
                desc: "Profiter le mieux et le plus longtemps possible de ses proches : c'est la seule chose qui vaut VRAIMENT le coup. Tout notre travail part de là.",
              },
              {
                title: "Ultra-personnalisé",
                desc: "On ne fait pas de programme générique. On construit avec vous une routine réaliste, adaptée à votre agenda de parent et à vos vrais objectifs.",
              },
              {
                title: "Prendre soin de soi",
                desc: "Vous êtes précieux(se). Prendre soin de vous, c'est aussi prendre soin de ceux que vous aimez. On vous aidera à le faire, sans culpabilité.",
              },
            ].map((v, i) => (
              <div key={i} className="border-t-2 border-brand pt-8">
                <h3 className="font-heading text-2xl font-bold mb-4">{v.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Prêt(e) à nous rencontrer ?
          </h2>
          <p className="text-background/70 text-lg mb-10 max-w-xl mx-auto">
            30 minutes d'échange gratuit pour comprendre votre situation et voir si PUP Form est fait pour vous.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand text-white font-medium px-10 py-4 rounded-xl text-lg hover:bg-brand/90 transition-colors"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default APropos;
