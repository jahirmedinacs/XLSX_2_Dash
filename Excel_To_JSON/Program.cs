using System;
using System.IO;
using Text = System.Text;
// using Data = System.Data;

using ExcelDataReader;
using JSON = Newtonsoft.Json;   

namespace Excel_To_JSON
{
class Program
    {   
        static void Main(string[] args)
        {   
            String filePath;
            filePath = args[0];
            
            Text.Encoding.RegisterProvider(Text.CodePagesEncodingProvider.Instance);

            if (!File.Exists(filePath))
            {
                return;
            }
    

            using (var fileStream = File.Open(filePath, FileMode.Open, FileAccess.Read))
            {
                using (var excelTraverser = ExcelReaderFactory.CreateReader(fileStream))
                {
                    var excelDataSet = excelTraverser.AsDataSet();

                    string JSONString = string.Empty;  
                    JSONString = JSON.JsonConvert.SerializeObject(excelDataSet);  
                    
                    Console.Write(JSONString); 
                }
            }
        }
    }
}
