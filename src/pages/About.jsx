import React from 'react'
import { Bike, Car, Footprints, Heart } from 'lucide-react'

export default function About() {
  return (
    <section className="max-w-3xl">
      <h1 className="text-display font-display mb-3">DropMate hakkında</h1>
      <p className="text-body text-ink-muted mb-6">
        DropMate, mahallenin hızını kullanan bir teslimat platformudur. Bir
        ürünü alana en yakın kişi onu kapına bırakır — komisyon, kuryenin
        seçtiği teslimat moduna ve süresine göre değişir.
      </p>

      <div className="grid sm:grid-cols-3 gap-3 mb-8">
        <div className="card flex items-center gap-3">
          <Footprints className="w-6 h-6 text-primary" />
          <div>
            <div className="font-semibold">Yürüyerek</div>
            <div className="text-caption text-ink-muted">35-60 dk · ₺15-40</div>
          </div>
        </div>
        <div className="card flex items-center gap-3">
          <Bike className="w-6 h-6 text-primary" />
          <div>
            <div className="font-semibold">Bisiklet</div>
            <div className="text-caption text-ink-muted">20-35 dk · ₺25-75</div>
          </div>
        </div>
        <div className="card flex items-center gap-3">
          <Car className="w-6 h-6 text-primary" />
          <div>
            <div className="font-semibold">Araba</div>
            <div className="text-caption text-ink-muted">10-20 dk · ₺45-120</div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-h2 font-semibold mb-2 flex items-center gap-2">
          <Heart className="w-5 h-5 text-primary" /> Vizyon
        </h2>
        <p className="text-body text-ink-muted">
          Her teslimat aynı zamanda bir kazanç fırsatıdır. DropMate, yürüyen
          herkese küçük bir gelir, sipariş veren herkese de hızlı bir çözüm
          sunmayı hedefler.
        </p>
      </div>
    </section>
  )
}
