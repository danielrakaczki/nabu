import { supabase } from "@/utils/supabase";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [collections, setCollections] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    supabase
      .from('collections')
      .select('id, name, is_public')
      .then(({ data, error }) => {
        if (error) setError(error.message)
        else setCollections(data || [])
      })
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      {collections.map(col => (
        <Text key={col.id}>
          {col.name} ({col.is_public ? 'public' : 'private'})
        </Text>
      ))}
    </View>
  )
}
