"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check, ChevronDown, ChevronUp } from "lucide-react"

interface BankAccount {
  type: 'pesos' | 'dolares'
  bank: string
  accountType: string
  accountNumber: string
  cbu: string
  alias: string
  holder: string
  cuit?: string
}

const bankAccounts: BankAccount[] = [
  {
    type: 'pesos',
    bank: 'Brubank',
    accountType: 'Caja de Ahorro',
    accountNumber: '1300937098001',
    cbu: '1430001713009370980015',
    alias: 'thewednegraychelo',
    holder: 'Maria Victoria Piantoni Vera',
    cuit: '27-40402365-4'
  },
  {
    type: 'dolares',
    bank: 'Brubank',
    accountType: 'Caja de Ahorro USD',
    accountNumber: '1400937098002',
    cbu: '1430001714009370980023',
    alias: 'negraychelo',
    holder: 'Maria Victoria Piantoni Vera'
  }
]

export function GiftSection() {
  const [expandedAccount, setExpandedAccount] = useState<'pesos' | 'dolares' | null>(null)
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const toggleAccount = (type: 'pesos' | 'dolares') => {
    setExpandedAccount(expandedAccount === type ? null : type)
  }

  const copyToClipboard = async (text: string, fieldName: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(fieldName)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error('Error al copiar:', err)
    }
  }

  const renderAccountDetails = (account: BankAccount) => (
    <div className="mt-6 p-6 bg-white/50 rounded-2xl border border-[#701114]/20 space-y-4 animate-fade-in-down overflow-visible">
      <div className="text-left space-y-3 w-full">
        <div className="flex justify-between items-center p-3 bg-white/70 rounded-xl border border-[#701114]/10">
          <div>
            <p className="text-xs font-medium text-[#701114]/60 font-poppins">BANCO</p>
            <p className="text-sm font-semibold text-[#701114] font-poppins">{account.bank}</p>
          </div>
        </div>

        <div className="flex justify-between items-center p-3 bg-white/70 rounded-xl border border-[#701114]/10">
          <div>
            <p className="text-xs font-medium text-[#701114]/60 font-poppins">TIPO DE CUENTA</p>
            <p className="text-sm font-semibold text-[#701114] font-poppins">{account.accountType}</p>
          </div>
        </div>

        <div className="flex justify-between items-center p-3 bg-white/70 rounded-xl border border-[#701114]/10">
          <div className="flex-1">
            <p className="text-xs font-medium text-[#701114]/60 font-poppins">NÚMERO DE CUENTA</p>
            <p className="text-sm font-semibold text-[#701114] font-poppins font-mono">{account.accountNumber}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => copyToClipboard(account.accountNumber, `account-${account.type}`)}
            className="ml-2 h-8 w-8 p-0 hover:bg-[#701114]/10"
          >
            {copiedField === `account-${account.type}` ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4 text-[#701114]" />
            )}
          </Button>
        </div>

        <div className="flex justify-between items-center p-3 bg-white/70 rounded-xl border border-[#701114]/10">
          <div className="flex-1">
            <p className="text-xs font-medium text-[#701114]/60 font-poppins">CBU</p>
            <p className="text-sm font-semibold text-[#701114] font-poppins font-mono">{account.cbu}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => copyToClipboard(account.cbu, `cbu-${account.type}`)}
            className="ml-2 h-8 w-8 p-0 hover:bg-[#701114]/10"
          >
            {copiedField === `cbu-${account.type}` ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4 text-[#701114]" />
            )}
          </Button>
        </div>

        <div className="flex justify-between items-center p-3 bg-white/70 rounded-xl border border-[#701114]/10">
          <div className="flex-1">
            <p className="text-xs font-medium text-[#701114]/60 font-poppins">ALIAS</p>
            <p className="text-sm font-semibold text-[#701114] font-poppins">{account.alias}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => copyToClipboard(account.alias, `alias-${account.type}`)}
            className="ml-2 h-8 w-8 p-0 hover:bg-[#701114]/10"
          >
            {copiedField === `alias-${account.type}` ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4 text-[#701114]" />
            )}
          </Button>
        </div>

        {account.cuit && (
          <div className="flex justify-between items-center p-3 bg-white/70 rounded-xl border border-[#701114]/10 w-full">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-[#701114]/60 font-poppins">CUIT</p>
              <p className="text-sm font-semibold text-[#701114] font-poppins font-mono break-all">{account.cuit}</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard(account.cuit!, `cuit-${account.type}`)}
              className="ml-2 h-8 w-8 p-0 hover:bg-[#701114]/10 flex-shrink-0"
            >
              {copiedField === `cuit-${account.type}` ? (
                <Check className="h-4 w-4 text-green-600" />
              ) : (
                <Copy className="h-4 w-4 text-[#701114]" />
              )}
            </Button>
          </div>
        )}

        <div className="flex justify-between items-center p-3 bg-white/70 rounded-xl border border-[#701114]/10">
          <div>
            <p className="text-xs font-medium text-[#701114]/60 font-poppins">TITULAR</p>
            <p className="text-sm font-semibold text-[#701114] font-poppins">{account.holder}</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section className="bg-[#F6EFEB] py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6 flex justify-center">
          <img
            src="/si_queres_hacernos_un_regalo_new.svg"
            alt="Si querés hacernos un regalo"
            className="h-12 md:h-16 w-auto object-contain max-w-full"
          />
        </div>
        <p className="text-sm md:text-base text-[#701114] mb-8 max-w-2xl mx-auto leading-relaxed font-poppins">
          El mejor regalo para nosotros es que nos acompañen en este día tan especial, pero si igualmente querés
          regalarnos algo, te dejamos nuestros datos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            onClick={() => toggleAccount('pesos')}
            className="bg-[#701114] hover:bg-[#5a0e10] text-primary-foreground rounded-full px-12 py-6 text-base font-poppins flex items-center gap-2"
          >
            CUENTA EN PESOS
            {expandedAccount === 'pesos' ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
          <Button 
            onClick={() => toggleAccount('dolares')}
            className="bg-[#701114] hover:bg-[#5a0e10] text-primary-foreground rounded-full px-12 py-6 text-base font-poppins flex items-center gap-2"
          >
            CUENTA EN DÓLARES
            {expandedAccount === 'dolares' ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Información desplegable */}
        <div className="max-w-2xl mx-auto min-h-0 overflow-visible">
          {expandedAccount === 'pesos' && renderAccountDetails(bankAccounts[0])}
          {expandedAccount === 'dolares' && renderAccountDetails(bankAccounts[1])}
        </div>
      </div>
    </section>
  )
}
