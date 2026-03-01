"use client";

import { useState, useRef } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Briefcase,
  Target,
  Users,
  ShieldAlert,
  Scale,
  Search,
  FileText,
  Settings,
  TrendingUp,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Quote,
} from "lucide-react";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/xkovakva", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json",
        },
      });
      
      if (response.ok) {
        toast.success("Message envoyé avec succès ! Je vous répondrai rapidement.");
        formRef.current?.reset();
      } else {
        toast.error("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-lg font-semibold text-slate-900">
              Martine Lestoquoy
            </div>
            <div className="hidden md:flex space-x-8 text-sm text-slate-600">
              <a href="#about" className="hover:text-slate-900 transition-colors">Qui suis-je</a>
              <a href="#missions" className="hover:text-slate-900 transition-colors">Missions</a>
              <a href="#approach" className="hover:text-slate-900 transition-colors">Méthodologie</a>
              <a href="#references" className="hover:text-slate-900 transition-colors">Références</a>
              <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <p className="text-slate-400 text-sm uppercase tracking-wider mb-4">
              CHRO / Senior Advisor
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Martine Lestoquoy
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-slate-300 mt-2">
                Expert RH Fusions-Acquisitions & Restructuration
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl">
              Accompagner vos transformations complexes pour sécuriser le capital humain et accélérer la performance en France et à l'international.
            </p>
            <p className="text-slate-400 mb-8 max-w-2xl">
              Accompagnement stratégique & opérationnel des entreprises en croissance, crise, retournement ou optimisation des business model.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8"
              asChild
            >
              <a href="#contact">Discutons de votre projet</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Qui suis-je ?
              </h2>
              <p className="text-lg font-semibold text-slate-700 mb-4">
                Une double expertise RH & Juridique au service des opérations de M&A et de restructuration
              </p>
              <ul className="space-y-3 text-slate-600 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span><strong>20+ ans d'expérience</strong> auprès de Groupes internationaux, PME et ETI soutenues par des fonds d'investissements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>Parcours de DRH, Consultant Senior, ancien <strong>Juriste & Avocat d'Affaires</strong> au Barreau de Paris.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span><strong>Executive Interim Management</strong> & Services de Conseil auprès de directions générales, DRH et fonds de Private Equity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>Expérience en environnements internationaux et matriciels avec une expérience multiculturelle en <strong>Europe, USA, Asie</strong>.</span>
                </li>
              </ul>
              <div className="p-4 bg-slate-100 rounded-lg border-l-4 border-slate-800">
                <p className="text-slate-800 font-medium italic">
                  "Une conviction forte : Le capital humain est la clé de la réussite durable de toute opération de transformation."
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-slate-200 rounded-2xl overflow-hidden">
                <img 
                  src="/photo.jpeg" 
                  alt="Martine Lestoquoy - Photo professionnelle" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missions Section */}
      <section id="missions" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Missions clés de management de transition RH
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              J'interviens en management de transition RH et en conseil pour sécuriser les dimensions humaines des opérations de M&A, de restructuration et de transformation, depuis la préparation jusqu'à l'exécution opérationnelle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Pilotage de projets RH de transformation
                </h3>
                <p className="text-slate-600 text-sm">
                  De la préparation à l'implémentation des opérations de Fusions-Acquisitions, M&A, carve-out, LBO, réorganisations, PDV, PSE, changement de business model : cadrage RH, feuille de route, exécution et suivi.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Alignement stratégie RH & business
                </h3>
                <p className="text-slate-600 text-sm">
                  Audit et design de la fonction RH, organisation et digitalisation de la DRH, politiques RH, RSE et marque Employeur pour soutenir la stratégie du groupe et l'agenda des actionnaires.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Management opérationnel d'équipes
                </h3>
                <p className="text-slate-600 text-sm">
                  Prise en main de directions RH ou d'équipes projets, coordination multisites et multi-pays, matriciel, renforcement de la coopération transverse avec le business.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                  <ShieldAlert className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Gestion de crise et dialogue social
                </h3>
                <p className="text-slate-600 text-sm">
                  Anticipation et pilotage de situations sensibles (restructurations, fermeture de sites, changements d'organisation), restauration du dialogue social, prévention des risques psychosociaux et déploiement des standards Santé & Sécurité au travail.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Compliance RH et Juridique
                </h3>
                <p className="text-slate-600 text-sm">
                  Sécurisation des opérations par la mise en conformité juridique et éthique : normes locales et internationales, RGPD, gestion des contentieux, relations individuelles et collectives, documentation et RH.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Approche et Méthodologie
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Une approche sur mesure adaptée aux enjeux stratégiques et aux environnements internationaux exigeants. Je structure chaque intervention autour de quatre étapes clés, afin d'apporter clarté et résultats mesurables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                1
              </div>
              <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-slate-200 -z-10"></div>
              <div className="flex items-center gap-2 mb-2">
                <Search className="w-5 h-5 text-slate-600" />
                <h3 className="text-lg font-semibold text-slate-900">Diagnostic stratégique</h3>
              </div>
              <p className="text-slate-600 text-sm">
                Analyse des enjeux business, des impacts humains, sociaux et organisationnels, cartographie des risques et des leviers de performance.
              </p>
            </div>

            <div className="relative">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                2
              </div>
              <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-slate-200 -z-10"></div>
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-5 h-5 text-slate-600" />
                <h3 className="text-lg font-semibold text-slate-900">Plan d'action coconstruit</h3>
              </div>
              <p className="text-slate-600 text-sm">
                Définition ou co-construction d'un plan d'action priorisé, avec objectifs, calendrier et indicateurs de succès avec les parties prenantes.
              </p>
            </div>

            <div className="relative">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                3
              </div>
              <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-slate-200 -z-10"></div>
              <div className="flex items-center gap-2 mb-2">
                <Settings className="w-5 h-5 text-slate-600" />
                <h3 className="text-lg font-semibold text-slate-900">Mise en œuvre opérationnelle</h3>
              </div>
              <p className="text-slate-600 text-sm">
                Pilotage de l'exécution, implication des équipes, gestion du changement, accompagnement des managers et communication ciblée.
              </p>
            </div>

            <div className="relative">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                4
              </div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-slate-600" />
                <h3 className="text-lg font-semibold text-slate-900">Mesure d'impact</h3>
              </div>
              <p className="text-slate-600 text-sm">
                Suivi des indicateurs de performance, ajustements, formalisation de bonnes pratiques et transmission aux équipes internes pour appropriation durable.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-slate-700 font-medium italic">
              "Transparence, approche collaborative et culture du résultat guident chacune de mes missions."
            </p>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section id="references" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Références & Résultats
            </h2>
            <p className="text-xl text-slate-600">Ils m'ont fait confiance</p>
          </div>

          {/* Sectors */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-slate-900 mb-6 text-center">Secteurs d'intervention</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Novartis",
                "AstraZeneca", 
                "Alfasigma",
                "Quadient",
                "Intel",
                "G Square"
              ].map((company) => (
                <div key={company} className="px-6 py-3 bg-white rounded-full shadow-sm border border-slate-200">
                  <span className="text-slate-700 font-medium">{company}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-4 text-sm text-slate-500">
              <span className="px-3 py-1 bg-slate-200 rounded-full">Industrie Pharmaceutique & Santé</span>
              <span className="px-3 py-1 bg-slate-200 rounded-full">Industrie Technologique</span>
              <span className="px-3 py-1 bg-slate-200 rounded-full">Private Equity</span>
            </div>
          </div>

          {/* Key Results */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-slate-900 text-white">
              <CardContent className="p-6">
                <div className="text-4xl font-bold mb-2">300</div>
                <p className="text-slate-300 text-sm">
                  Préservation de 300 postes et continuité opérationnelle dans le cadre d'un carve-out et d'une cession de site dans le secteur IT/Tech.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 text-white">
              <CardContent className="p-6">
                <div className="text-4xl font-bold mb-2">1 100</div>
                <p className="text-slate-300 text-sm">
                  Transfert de 1.100 collaborateurs et neutralisation de l'impact social d'une réorganisation dans le secteur FMCG.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 text-white">
              <CardContent className="p-6">
                <div className="text-4xl font-bold mb-2">1 000</div>
                <p className="text-slate-300 text-sm">
                  Digitalisation de la paie pour 1.000 collaborateurs avec implémentation d'un SIRH unique et harmonisation des bonnes pratiques.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-slate-300 mb-4" />
                <p className="text-slate-700 mb-4 italic">
                  "Tu as apporté un vrai savoir-faire et une grande capacité d'engagement dans un contexte très tendu."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-slate-600">DG</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Directeur Général</p>
                    <p className="text-sm text-slate-500">FMCG</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-slate-300 mb-4" />
                <p className="text-slate-700 mb-4 italic">
                  "Merci beaucoup et surtout pour toute ton aide précieuse. Par ton attention permanente et ton approche toujours constructive, tu as permis à l'entreprise de traverser une période de transition très intense et complexe. Je suis très satisfait d'avoir pu compter sur toi pendant ces moments et je t'en remercie pleinement et sincèrement."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-slate-600">DG</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Directeur Général</p>
                    <p className="text-sm text-slate-500">Tech</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Valeurs & Engagements
            </h2>
            <p className="text-xl text-slate-600">Mes piliers d'intervention</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldAlert className="w-8 h-8 text-slate-700" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Confidentialité & Éthique</h3>
              <p className="text-slate-600 text-sm">
                Dans la gestion de situations sensibles et confidentielles
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-slate-700" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Leadership humain & aligné</h3>
              <p className="text-slate-600 text-sm">
                Au service des dirigeants, des équipes et du projet d'entreprise
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-slate-700" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Excellence opérationnelle</h3>
              <p className="text-slate-600 text-sm">
                Orientation résultats et continuité de l'activité dans les phases critiques
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-slate-700" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Impact durable</h3>
              <p className="text-slate-600 text-sm">
                Avec une attention portée à la culture, à l'engagement, et à la réputation de l'employeur
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Travaillons ensemble
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Discutons de votre situation
              </p>
              <p className="text-slate-400 mb-8">
                Je serai ravie d'échanger de manière confidentielle sur vos enjeux de M&A, de restructuration ou de transformation en France ou à l'international.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-slate-300" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <a href="mailto:contact@mlestoquoy.com" className="text-white hover:text-slate-300 transition-colors">
                      contact@mlestoquoy.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-slate-300" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Téléphone</p>
                    <a href="tel:+33609030167" className="text-white hover:text-slate-300 transition-colors">
                      +33 6 09 03 01 67
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-slate-300" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/martinelestoquoy/" className="text-white hover:text-slate-300 transition-colors">
                      Voir mon profil LinkedIn
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-slate-300" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Zone d'intervention</p>
                    <p className="text-white">France, Europe, International</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">
                Formulaire de contact
              </h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="_subject" value="Nouveau message depuis le site web" />
                <input type="text" name="_gotcha" style={{ display: 'none' }} />
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Prénom
                    </label>
                    <Input name="prenom" placeholder="Votre prénom" className="bg-slate-50 text-slate-900" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Nom
                    </label>
                    <Input name="nom" placeholder="Votre nom" className="bg-slate-50 text-slate-900" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <Input type="email" name="email" placeholder="votre@email.com" className="bg-slate-50 text-slate-900" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Entreprise
                  </label>
                  <Input name="entreprise" placeholder="Nom de votre entreprise" className="bg-slate-50 text-slate-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Message
                  </label>
                  <Textarea 
                    name="message"
                    placeholder="Décrivez votre projet ou vos besoins..." 
                    className="bg-slate-50 text-slate-900 min-h-[120px]"
                    required
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-400">
        <div className="max-w-7xl mx-auto">
          <Separator className="bg-slate-800 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">
              © 2024 Martine Lestoquoy. Tous droits réservés.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
