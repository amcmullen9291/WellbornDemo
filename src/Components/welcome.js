import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { setFinishList } from '../Actions/FinishActions';
import Middlearea from './middlearea';

function Welcome() {

  const dispatch = useDispatch();

  let [finishesList, setFinishesList ] = useState([
      //Cherry and Character Cherry Stains
      {id: "1", nameOf: "AutumnSpice", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "2", nameOf: "Blush", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "3", nameOf: "Caramel", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "4", nameOf: "Dark", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "6", nameOf: "Espresso", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "7", nameOf: "Gauntlet", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "16", nameOf: "Shale", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "17", nameOf: "Sienna", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "18", nameOf: "Suede", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      //Cherry Stains with Glaze
      {id: "19", nameOf: "AutumnSpiceCharcoal", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "20", nameOf: "BlushCharcoal", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "21", nameOf: "BlushJava", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "22", nameOf: "DriftJava", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "23", nameOf: "DriftPewter", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "24", nameOf: "GauntletCharcoal", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "25", nameOf: "EvergreenJava", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "26", nameOf: "NutmegJava", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "27", nameOf: "ShadowCharcoal", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "28", nameOf: "ShadowPewter", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "29", nameOf: "NaturalSlate", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "30", nameOf: "NaturalJava", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "31", nameOf: "GingerCharcoal", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "32", nameOf: "ShaleGranite", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "33", nameOf: "DarkChocoal", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      // Maple and Character Maple Stains
      {id: "34", nameOf: "Ash", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "35", nameOf: "Blush", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "36", nameOf: "Coffee", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "X", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "37", nameOf: "Cranberry", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "38", nameOf: "Natural", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "X", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "39", nameOf: "Espresso", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "40", nameOf: "Hazelnut", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "41", nameOf: "Oatmeal", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "42", nameOf: "Spiceberry", material: "Maple", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "X", home_concepts: "X", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "43", nameOf: "Sable", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "X", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "44", nameOf: "Light", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "X", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      //Maple Stains with Glaze
      {id: "45", nameOf: "AshCharcoal", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "46", nameOf: "BlushCharcoal", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "47", nameOf: "CaramelJava", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "48", nameOf: "EvergreenJava", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "49", nameOf: "CranberryCharcoal", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "50", nameOf: "GauntletCharcoal", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "51", nameOf: "DriftSlate", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "52", nameOf: "SableCharcoal", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "53", nameOf: "OatmealCharcoal", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "54", nameOf: "ShaleMocha", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "55", nameOf: "OatmealJava", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "56", nameOf: "SiennaCharcoal", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "57", nameOf: "HoneyJava", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "58", nameOf: "NaturalSlate", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
  //Maple with Paints
      {id: "59", nameOf: "Aqua", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },
      {id: "60", nameOf: "Bleu", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },
      {id: "61", nameOf: "BrightWhite", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },
      {id: "62", nameOf: "Dove", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },
      {id: "63", nameOf: "Sandstone", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },
      {id: "64", nameOf: "Mint", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },
      {id: "65", nameOf: "Sapphire", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },
      {id: "66", nameOf: "Onyx", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },
  //Maple Paints with Glaze
      {id: "67", nameOf: "AquaGranite", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },
      {id: "68", nameOf: "AquaJava", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },
      {id: "69", nameOf: "MinkGrayGranite", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },
      {id: "70", nameOf: "DoveSlate", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },
      {id: "71", nameOf: "GlacierJava", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },
      {id: "72", nameOf: "MintGranite", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },
      {id: "73", nameOf: "PebblePewter", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },
      {id: "74", nameOf: "OliveMocha", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },
      {id: "75", nameOf: "PebbleJava", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },
      {id: "76", nameOf: "WillowJava", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },
      {id: "77", nameOf: "SapphireJava", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },
      {id: "78", nameOf: "DivinityJava", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },
      {id: "79", nameOf: "OlivePewter", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },
      {id: "80", nameOf: "GrayMistGranite", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },
  //Oak Stains
      {id: "81", nameOf: "Blush", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "82", nameOf: "Caramel", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "83", nameOf: "Shadow", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "84", nameOf: "Sable", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "X", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "85", nameOf: "Spiceberry", material: "Oak", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "86", nameOf: "Hazelnut", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "87", nameOf: "Gauntlet", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "88", nameOf: "Shale", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "89", nameOf: "Dark", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
//Oak Stain with Glaze
      {id: "90", nameOf: "CranberryCharcoal", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "91", nameOf: "NaturalSlate", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "92", nameOf: "BlushJava", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "93", nameOf: "ShadowPewter", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "94", nameOf: "NutmegJava", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "95", nameOf: "SiennaCharcoal", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "96", nameOf: "HoneyJava", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "97", nameOf: "LightJava", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "98", nameOf: "SuedeCharcoal", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "99", nameOf: "EvergreenJava", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "100", nameOf: "DriftJava", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "101", nameOf: "NaturalSlate", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "102", nameOf: "SaddleJava", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
      //Oak Paints
      {id: "103", nameOf: "Aqua", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "104", nameOf: "Blue", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "105", nameOf: "BrightWhite", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "106", nameOf: "Creme", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "107", nameOf: "Divinity", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "108", nameOf: "Dove", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "109", nameOf: "Glacier", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "110", nameOf: "GrayMist", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "111", nameOf: "MinkGray", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "112", nameOf: "Mint", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "113", nameOf: "Olive", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "114", nameOf: "Onyx", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "115", nameOf: "OysterWhite", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "116", nameOf: "Pebble", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "117", nameOf: "Sandstone", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "118", nameOf: "Sapphire", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "119", nameOf: "Willow", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      //Oak Paints with Glaze
      {id: "120", nameOf: "OliveMocha", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "121", nameOf: "OlivePewter", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "122", nameOf: "OysterWhiteGranite", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "123", nameOf: "OysterWhiteJava", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "124", nameOf: "PebbleJava", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "125", nameOf: "PebblePewter", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "126", nameOf: "SandstonePewter", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "127", nameOf: "SandstoneSlate", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "128", nameOf: "SapphireGranite", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "129", nameOf: "DoveSlate", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
//Hickory Stains
     {id: "130", nameOf: "Ash", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "131", nameOf: "Blush", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "132", nameOf: "Caramel", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "133", nameOf: "Coffee", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "134", nameOf: "Cranberry", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "135", nameOf: "Dark", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "136", nameOf: "Drift", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "137", nameOf: "Espresso", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "138", nameOf: "Gauntlet", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "139", nameOf: "Ginger", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },      
//Hickory Stains with Glaze
     {id: "140", nameOf: "EvergreenJava", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "141", nameOf: "GauntletCharcoal", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "142", nameOf: "GauntletJava", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "143", nameOf: "GingerCharcoal", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "144", nameOf: "GingerJava", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "145", nameOf: "HazelCharcoal", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "146", nameOf: "HoneyJava", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "147", nameOf: "LightJava", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "148", nameOf: "LightSlate", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "149", nameOf: "NaturalSlate", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "150", nameOf: "ShaleMocha", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "151", nameOf: "SiennaCharcoal", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "152", nameOf: "SuedeCharcoal", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },      
//MDF Paints
     {id: "153", nameOf: "Mint", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "154", nameOf: "Olive", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "155", nameOf: "Onyx", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "156", nameOf: "OysterWhite", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "157", nameOf: "Pebble", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "158", nameOf: "Sandstone", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "159", nameOf: "Willow", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "160", nameOf: "Aqua", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "161", nameOf: "Bleu", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "162", nameOf: "BrightWhite", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
  
     {id: "163", nameOf: "AquaGranite", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "164", nameOf: "AquaJava", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "165", nameOf: "BleuJava", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "166", nameOf: "BrightWhiteJava", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "167", nameOf: "CremeMocha", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "168", nameOf: "CremeSlate", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "169", nameOf: "DivinityJava", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "170", nameOf: "DoveJava", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "171", nameOf: "DovePewter", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "172", nameOf: "GrayMistGranite", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "173", nameOf: "GrayMistJava", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "174", nameOf: "MinkGrayGranite", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "175", nameOf: "MinkGrayJava", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "176", nameOf: "MintGranite", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "177", nameOf: "MintJava", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
//Laminates
     {id: "178", nameOf: "Linen", material: "Laminate", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "X", home_concepts: "X", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
     {id: "179", nameOf: "NaturalMaple", material: "Laminate", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "X", home_concepts: "X", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
     {id: "180", nameOf: "Sienna", material: "Laminate", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "X", home_concepts: "X", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
     {id: "181", nameOf: "Spiceberry", material: "Laminate", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "X", home_concepts: "X", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
     {id: "182", nameOf: "White", material: "Laminate", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "X", home_concepts: "X", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
//Designer Laminates
     {id: "183", nameOf: "BronzedLeather", material: "Designer Laminate", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
     {id: "184", nameOf: "Dusk", material: "Designer Laminate", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
     {id: "185", nameOf: "HighGlossCinder", material: "Designer Laminate", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
     {id: "186", nameOf: "HighGlossEbony", material: "Designer Laminate", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
     {id: "187", nameOf: "HighGlossGold", material: "Designer Laminate", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
     {id: "188", nameOf: "HighGlossMoonlight", material: "Designer Laminate", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
     {id: "189", nameOf: "HighGlossPoppyRed", material: "Designer Laminate", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
     {id: "190", nameOf: "HighGlossStardust", material: "Designer Laminate", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
//Melamine
     {id: "191", nameOf: "BiscottiCherry", material: "Melamine", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
     {id: "192", nameOf: "ChicoryAlder", material: "Melamine", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
     {id: "193", nameOf: "CinderAlder", material: "Melamine", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
     {id: "194", nameOf: "HuskAlder", material: "Melamine", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
     {id: "195", nameOf: "PlatinumAlder", material: "Melamine", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      

     //Heavy Texture Melamine
     {id: "196", nameOf: "CottonPine", material: "Heavy Texture Melamine", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
     {id: "197", nameOf: "PuttyOak", material: "Heavy Texture Melamine", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
     {id: "198", nameOf: "SmokeOak", material: "Heavy Texture Melamine", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
     {id: "199", nameOf: "SnowOak", material: "Heavy Texture Melamine", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
     {id: "200", nameOf: "ZincOak", material: "Heavy Texture Melamine", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      


    ]);
  
  const fetchFinishes = () => {
      dispatch(setFinishList(finishesList));
      console.log("Current listings:", finishesList)
    };
    
    useEffect(() => {
      fetchFinishes();
    }, []);

    return (
    <div>
              <>
        <div id="container">
        <div className="App">
                <center><h1 id="welcomePage">Wellborn Cabinets</h1></center>
                <div id="sidenav">
          <a className="navmenu" href={"/wordpress/stains"}>Ｓｔａｉｎｓ</a><br/>
          <hr className="spacer"/>
          <a className="navmenu" href={"/wordpress/glazes"}>Ｇｌａｚｅｓ</a><br/>
          <hr className="spacer"/>
          <a className="navmenu" href={"/wordpress/paints"}>Ｐａｉｎｔｓ</a><br/>
          <hr className="spacer"/>
          <a className="navmenu" href={"/wordpress/laminates"}>Ｌａｍｉｎａｔｅｓ</a><br/>
          <hr className="spacer"/>
          <a className="navmenu" href={"/wordpress/melamine"}>Ｍｅｌａｍｉｎｅ</a> 
          <hr/> 
          <br/><br/>
          <a className="App-link" id="blog-link" href="https://www.wellborn.com/blog/" target="_blank" rel="noopener noreferrer">
                    A Wellborn Blog </a>
                    <br/><br/><br/>
                    <center><button id="homebutton"><a  id="homebuttontext" className="App-link" href={"/wordpress"}>Return Home</a></button></center>
        </div>
                <span id="addy">
                    38669 Hwy 77 S. Ashland, AL 36251
                </span>
                <p>Hello.</p>
        </div>
        <Middlearea/>
        </div>
        </>

    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    finishesList: state.finishesList
  }

}

const mapDispatchToProps = (dispatch) => {
  return{
    Finish: (finishesList) => { dispatch({type: 'SELECTED_FINISH', finishesList})}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
