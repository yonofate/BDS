﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HappyRE.Core.Entities
{
    public static class Conts
    {
        public const string Cpanel_user = "cpanel_user";
        #region Roles
        public const string Role_Member = "member";
        public const string Role_Editor = "editor";
        public const string Role_Super = "super";
        public const string Role_Agent = "agent";
        public const string Role_Admin = "admin";
        #endregion

        #region Cache table name
        public const string CACHE_KEY_ALL = "ALL";
        public const string CACHE_HASHTABLE_TEMPLATE = "TEMPLATE";
        public const string CACHE_HASHTABLE_LANDINGPAGE = "LANDINGPAGE";
        public const string CACHE_HASHTABLE_TEMPLATE_CATEGORY = "TEMPLATE_CATEGORY";
        public const string CACHE_HASHTABLE_COLLECTION = "COLLECTION";
        public const string CACHE_HASHTABLE_IMAGESTOCK = "IMAGESTOCK";
        public const string CACHE_HASHTABLE_FILE = "FILE";
        #endregion

        #region redis
        public const string REDIS_TEMPLATE_KEY = "template:key";
        public const string REDIS_TEMPLATE_SEARCH = "template:search";
        public const string REDIS_TEMPLATECATEGORY_KEY = "templatecategory:key";
        public const string REDIS_TEMPLATECATEGORY_TYPE = "templatecategory:type";
        #endregion

        #region Utils
        public static string GetTableName(string tableName)
        {
            if (string.IsNullOrEmpty(tableName) == true) return "";
            tableName = tableName.ToLower();
            switch (tableName)
            {
                case "customer":
                    return "khách hàng";
                case "customerinfo":
                    return "thông tin chăm sóc khách hàng";
                case "property":
                    return "bất động sản";
                case "saleorder":
                    return "giao dịch bđs";
                case "department":
                    return "phòng ban";
                case "userprofile":
                    return "người dùng";
                case "notification":
                    return "thông báo";
                default:
                    return "";
            }
        }

        public static string GetLogAction(string action)
        {
            if (string.IsNullOrEmpty(action) == true) return "";
            action = action.ToLower();
            switch (action)
            {
                case "search":
                    return "Xem danh sách";
                case "detail":
                    return "Xem chi tiết";
                case "iu":
                    return "Cập nhật thông tin";
                case "delete":
                    return "Xóa";
                case "export":
                    return "Xuất dữ liệu";
                case "showmobile":
                    return "Xem sđt";
                case "showmobileproperty":
                    return "Xem sđt khách hàng của BĐS";
                case "report":
                    return "Báo cáo";
                default:
                    return "";
            }
        }

        #endregion
    }
}